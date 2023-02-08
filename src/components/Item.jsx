import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/item.css'

const Item = ({producto}) => {
  return (
    <Card className="itemcard">
      <Card.Img variant="top" src={producto.img} className="imgcard" />
      <Card.Body className="textcard text-white p-0">
        <Card.Title className="text-center px-3 pt-3 mb-0">{producto.titulo} <hr className="mb-2"/> </Card.Title>
        <div className="textdesc p-2 mb-0">
          <div className="mt-2 descp">
            <p>{producto.tipo} {producto.marca} {producto.caracteristica}</p>
            <h5 className='cardPrecio mt-2 mb-0'>${producto.precio}</h5>
          </div>
        </div>
        <Link to={`/item/${producto.id}`}>
        <Button variant="warning" className="btncompra">Ver mas</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item