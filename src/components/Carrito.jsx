import './styles/carrito.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'

const Carrito = () => {

  const {cart, totalPrice} = useContext(CartContext);
  console.log(cart)
  if(cart.length === 0){
    return(
      <>
      <p className='carritohome'> estavacio</p>
      <Link to='/'>hacer compras</Link>
      </>
    )
  }

  return (

    <main className='cart'>
      <div className="banner"> 
        <h1 className='mb-5'>Tu Carrito</h1> 
      </div>
      
      <div className='container-fluid'>

        <div className="row align-items-start">

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
                <h6>Tax</h6>
              </div>
              <div className="col-sm-4 p-0">
                <p className="tax">$6.40</p>
              </div>
            </div>
            <hr />

            <div className="row mx-0 mb-2">
              <div className="col-sm-8 p-0 d-inline">
                <h5>Total</h5>
              </div>
              <div className="col-sm-4 p-0">
                <p className="total">${totalPrice()}</p>
              </div>
            </div>
            <button className="btn-checkout shopnow"><span>Checkout</span></button>
          </div>
        </div>

      </div>

    </main>
/*     <div className='carritohome'>
      <Link to='/'>Volver a Comprar</Link>

      {
        cart.map( product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        total : ${totalPrice()}
      </p>
    </div> */
  )
}

export default Carrito