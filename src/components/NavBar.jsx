import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './styles/navbar.css'

function NavBar() {

  return (

    <>
    <Navbar bg="dark" variant="dark" fixed='top' expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className='logonav' >
          <img src="https://res.cloudinary.com/dmzrvnlgb/image/upload/v1673792529/freepik--Headphones--inject-41_lrzbkl.png" alt="logo" className='logoimg' />
          <h5 className='mb-0 mt-1 logotxt'> Berni<br /> <span className='text-warning'>S</span>tore</h5>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center align-items-center">
            <Nav.Link as={Link} to="/categoria/Guitarras">Guitarras</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Bajos">Bajos</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Amplificadores">Amplificadores</Nav.Link>
            <Nav.Link as={Link} to="/carrito">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

  )
}

export default NavBar
