import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from 'react-bootstrap'
import './styles/itemCart.css'

const ItemCart = ( {product}) => {

    const {deleteFromCart, plusQuantity, removeQuantity} = useContext(CartContext);


    return (

        <div className="cartItem row align-items-start">
            <div className="col-3 mb-2">
                <img className="w-100" src={product.img} alt={product.titulo} />
            </div>
            <div className="col-5 mb-2">
                <h6>{product.titulo}</h6>
                <p className="pl-1 mb-0">precio: ${product.precio}</p>
                <p className="pl-1 mb-0">{product.tipo}</p>
            </div>
            <div className="col-4 d-flex flex-column">
                <p className="cartItemPrice">${product.quantity * product.precio}</p>
                <div className="cartItemQuantity d-flex">
                    <Button onClick={()=> removeQuantity(product)} className="px-2" variant="link"><i className="bi bi-dash-circle text-dark"></i></Button>
                    <p className="p-1 m-auto text-center">{product.quantity}</p>
                    <Button onClick={()=> plusQuantity(product)} className="px-2" variant="link"><i className="bi bi-plus-circle text-dark"></i></Button>
                </div>
                <Button onClick={() => deleteFromCart(product.id)} variant="danger" className="m-1 mt-3 w-25 align-self-end p-0"><i className="bi bi-trash3"></i></Button>
            </div>
            <hr />
        </div>

    )
}

export default ItemCart
