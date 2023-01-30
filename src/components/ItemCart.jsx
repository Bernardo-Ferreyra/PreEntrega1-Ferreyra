import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from 'react-bootstrap'
import './styles/itemCart.css'
import ItemCount from './ItemCount'

const ItemCart = ( {product}) => {
    const {deleteFromCart} = useContext(CartContext);
    const[contador, setContador] = useState(product.quantity);

  return (
    <div className="cartItem row align-items-start">
        <div className="col-3 mb-2">
            <img className="w-100" src={product.img} alt={product.titulo} />
        </div>
        <div className="col-5 mb-2">
            <h6>{product.titulo}</h6>
            <p className="pl-1 mb-0">preciuo u: {product.precio}</p>
            <p className="pl-1 mb-0">{product.tipo}</p>
        </div>
        <div className="col-4 d-flex flex-column">
            <p className="cartItemPrice">${product.quantity * product.precio}</p>
            <p className="cartItemQuantity p-1 text-center">{product.quantity}</p>
            <ItemCount contador={contador} valorActualizado={setContador} />
            <Button onClick={() => deleteFromCart(product.id)} variant="danger" className="m-1 w-25 align-self-end p-0"><i className="bi bi-trash3"></i></Button>
        </div>
        <hr />
    </div>

  )
}

export default ItemCart


{/* <div className='container-fluid col-8'>
    <div className='itemcart'>
        <img src={product.img} alt={product.titulo} className="itemcart--img" />
    <div className='itemcart--text'>
        <p>titulo: {product.titulo} </p>
        <p>cantidad: {product.quantity} </p>
        <p>preciuo u : {product.precio} </p>
        <p> subtotal: ${product.quantity * product.precio} </p>
        <button onClick={()=> deleteFromCart(product.id)}>eliminar</button>
    </div>
</div>

</div> */}