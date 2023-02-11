import './styles/carrito.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'
import { Button } from 'react-bootstrap'
import ModalCheckout from './ModalCheckout'
import { useState } from 'react'

const Carrito = () => {
  
  window.scroll(0,0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {cart, totalPrice, clearCart} = useContext(CartContext);

  if(cart.length === 0){
    return(
      <div className='emptyCart'>
        <img className='emptyCart--img' src="https://res.cloudinary.com/dmzrvnlgb/image/upload/v1675527405/Group_1_nriq2z.png" alt="carritovacio" />
        <h2> Tu carrito esta vacio!</h2>
        <Link to='/'>
          <Button variant='warning'>Volver a Comprar</Button>
        </Link>
      </div>
    )
  }

  return (
    
    <>

      <main className='cart'>
        <div className="banner"> 
          <h1 className='m-5'>Tu Carrito</h1> 
        </div>
        <div className='w-100 d-grid gap-2 d-flex justify-content-start mb-4 px-2'>
          <Link to="/" >
            <Button variant='link' className='btncarrito'><i className="bi bi-reply-fill"></i>volver</Button>
          </Link>
          <Button variant='link' className='btncarrito' onClick={() => clearCart()}><i className="bi bi-cart-x"></i> Vaciar</Button>        
        </div>

        <div className='container-fluid'>

          <div className="row align-items-start pb-5">

            <div className="col-12 col-sm-8 items"> 
              {cart.map( product => <ItemCart key={product.id} product={product} />)}
            </div>
          
            <div className="col-12 col-sm-4 p-3 proceed form">

              <div className="row m-0">
                <div className="col-sm-8 p-0">
                  <h6>Subtotal</h6>
                </div>
                <div className="col-sm-4 p-0">
                  <p className="subtotal">${totalPrice()}</p>
                </div>
              </div>

              <div className="row m-0">
                <div className="col-sm-8 p-0 ">
                  <h6>IVA 21%</h6>
                </div>
                <div className="col-sm-4 p-0">
                  <p className="tax">${Math.round(totalPrice() * 0.21)}</p>
                </div>
              </div>
              <hr />

              <div className="row mx-0 mb-2">
                <div className="col-sm-8 p-0 d-inline">
                  <h5>Total</h5>
                </div>
                <div className="col-sm-4 p-0">
                  <p className="total">${totalPrice() + Math.round(totalPrice() * 0.21)}</p>
                </div>
              </div>
              <button className="btn-checkout shopnow" onClick={handleShow}><span>Checkout</span></button>

            </div>

          </div>

        </div>

      </main>
      <ModalCheckout show={show} handleClose={handleClose} />
    </>
  )
}

export default Carrito