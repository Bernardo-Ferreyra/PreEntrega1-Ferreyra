import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/item.css'

const Item = ({producto}) => {
  return (
    <Card className="itemcard p-0">
      <Card.Img variant="top" src={producto.img} className="imgcard" />
      <Card.Body className="textcard text-white p-0">
        <Card.Title className="text-center px-3 pt-2 mb-0">{producto.titulo} <hr className="m-2"/> </Card.Title>
          <div className="p-2 textdesc">
          <p className="text mb-0">{producto.descripcion}</p>
            <h5 className='align-self-end mt-2 mb-0'>${producto.precio}</h5>
          </div>
        <Link to={`/item/${producto.id}`}>
        <Button variant="warning" className="btncompra">Ver mas</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item

