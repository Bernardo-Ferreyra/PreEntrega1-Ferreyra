import React from 'react'
import "./styles/itemDetail.css"
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({item}) => {

    const[contador, setContador] = useState(1);
    const {addToCart} =useContext (CartContext);

  
    return (

        <div className="container-fluid p-0">
            <div className="card">
                <div className="card-body p-0">
                    <h2 className="card-title mx-2">{item.titulo}</h2>
                    <h6 className="card-subtitle mx-3 ">{item.tipo} {item.marca}</h6>
                    <div className="row m-0 p-0">
                        <div className="col-lg-5 col-md-5 col-sm-7">
                            <div className="white-box text-center"><img src={item.img} alt="unafoto" className='img-detail' /></div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-5 bg-dark text-white">
                            <h4 className="box-title mt-5">Descripcion</h4>
                            <p>{item.descripcion}</p>
                            <h2 className="mt-5">${item.precio}</h2>
                            <ItemCount contador={contador} valorActualizado={setContador} />
                            <Button onClick={() => addToCart(item, contador)} variant="warning"><i className="bi bi-cart3 mr-2"> Agregar al carrito</i></Button>
                            <h3 className="box-title mt-5">Info</h3>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check"></i>{item.marca}</li>
                                <li><i className="bi bi-check"></i>{item.tipo}</li>
                                <li><i className="bi bi-check"></i>{item.caracteristica}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail

