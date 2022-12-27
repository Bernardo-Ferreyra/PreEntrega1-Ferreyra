import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand href="#">Ecommerce-brand</Navbar.Brand>
            <Nav className="mr-auto d-flex justify-content-around align-items-center">
                <Nav.Link href="#Categoria1">Categoria1</Nav.Link>
                <Nav.Link href="#Categoria2">Categoria2</Nav.Link>
                <Nav.Link href="#Categoria3">Categoria3</Nav.Link>
                <Nav.Link href="#">
                    <CartWidget/>
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>

  )
}

export default NavBar