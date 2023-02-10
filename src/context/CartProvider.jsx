import { useState,useEffect } from "react";
import { CartContext } from "./CartContext";
import Swal from 'sweetalert2'

const cartFromLocalStorage= JSON.parse(localStorage.getItem('cart') || "[]");

const CartProvider = ({children}) => {

  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart])

  
  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find(prod => prod.id === id) ? true : false;
  };

  const deleteFromCart = (id) => {
    setCart(cart.filter(prod => prod.id !== id))
  };


  const addToCart = (item, quantity)=>{
    Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Agregado al carrito',
      position: 'bottom-right',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })

    let newCart;
    let product = cart.find(prod => prod.id === item.id)
    if(product){
      product.quantity += quantity;
      newCart = [...cart];
    }else{
      product = {...item, quantity: quantity}
      newCart = [...cart, product]
    }
    setCart(newCart)

  };

  const plusQuantity= (product) =>{
    let newCart;
    let newProduct = cart.find(prod => prod.id === product.id)
    if(newProduct){
      newProduct.quantity += 1;
      newCart = [...cart];
    }
    setCart(newCart)
    console.log(cart)
  }

  const removeQuantity= (product) =>{
    let newCart;
    let newProduct = cart.find(prod => prod.id === product.id)
    if(newProduct.quantity === 1){
      return
    }else{
      newProduct.quantity -= 1;
      newCart = [...cart];
    }
    setCart(newCart)
    console.log(cart)
  }

  const totalPrice = () => {
    return cart.reduce((acumulador, actualizado) => acumulador + actualizado.quantity * actualizado.precio, 0);
  }

  return (

    <CartContext.Provider value={{cart, addToCart, clearCart, deleteFromCart, isInCart, totalPrice, plusQuantity, removeQuantity}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider