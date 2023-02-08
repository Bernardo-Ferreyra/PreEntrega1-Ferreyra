import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';


const ModalCheckout = ({show, handleClose}) => {

    const [formValue, setformValue] = useState({
        name: '',
        email: '',
        phone: '',
        comentarios: '',
    })

    const {cart, totalPrice, clearCart} = useContext(CartContext);

    const order = {
        buyer: formValue,
        items: cart.map(product => (
            {id: product.id, 
            title: product.titulo, 
            price: product.precio,
            quantity: product.quantity})) ,
        total: totalPrice(),

    }


    const handleOrder = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id})=> orderCreated(id))
        .then(handleClose)
        .then(clearCart)
        .catch(error =>console.log(error))
    }

    const handleInputs = (event) =>{
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const orderCreated = (id) => {
        Swal.fire({
            icon: 'success',
            title: 'Orden creada con exito!',
            text: 'tu codigo es' + id,
          })
    }


    return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Finaliza Tu Pedido!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                name = "name"
                type="text"
                placeholder="Ingresa tu Nombre"
                value={formValue.name}
                onChange= {handleInputs}
                />
                
                <Form.Label>Email</Form.Label>
                <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formValue.email}
                onChange= {handleInputs}
                />

                <Form.Label>Telefono</Form.Label>
                <Form.Control
                name="phone"
                type="number"
                placeholder="Ingresa tu numero de telefono"
                value={formValue.phone}
                onChange= {handleInputs}
                />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >

              <Form.Label>Comentarios</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={3} 
              name="comentarios"
              value={formValue.comentarios}
              onChange= {handleInputs}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='w-100' variant="success" onClick={handleOrder}>
            Finalizar Compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCheckout
