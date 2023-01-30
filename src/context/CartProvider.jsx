import { useState } from "react";
import { CartContext } from "./CartContext";


const CartProvider = ({children}) => {

  const [cart, setCart] = useState ([]);

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

  const totalPrice = () => {
    return cart.reduce((acumulador, actualizado) => acumulador + actualizado.quantity * actualizado.precio, 0);
  }

  return (

    <CartContext.Provider value={{cart, addToCart, clearCart, deleteFromCart, isInCart, totalPrice}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider