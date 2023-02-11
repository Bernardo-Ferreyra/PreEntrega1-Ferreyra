import Button from 'react-bootstrap/Button';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Badge } from 'react-bootstrap';

function CartWidget() {
  const {cart} = useContext(CartContext);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    setTotal(
      cart?.reduce((acumulador, prod)=> {
        return acumulador + prod.quantity;
      },0)
    );

  } , [cart])

    return (
      
    <Button variant="warning">
      <i className="bi bi-cart3"> <Badge bg="danger">{total}</Badge></i>
    </Button>
      
    )
  }
  
  export default CartWidget