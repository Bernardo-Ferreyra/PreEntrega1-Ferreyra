import { Button } from "react-bootstrap"
import './styles/itemCount.css'

const ItemCount = ({contador,valorActualizado}) => {
    const sumar = () => {
        valorActualizado(contador +1)
    };
    const restar = () =>{
        if (contador  === 1){
            return
        }
        valorActualizado(contador -1)
    };
  return (
    <div className="countContainer mb-4">
       <Button onClick={sumar} variant="dark p-0 btncount"><i className="bi bi-plus-circle px-2"></i></Button>
       <span className="btntext px-2">{contador}</span>
       <Button onClick={restar} variant="dark p-0 btncount"><i className="bi bi-dash-circle px-2"></i></Button>
    </div>
  )
}

export default ItemCount
