import Item from "./Item"
import "./styles/ItemList.css"

const ItemList = ({items}) => {
  return (
    <div className='itemList pt-5 bg-dark'>
    {items.map((producto)=>{
      return <Item producto={producto} key={producto.id}></Item>
    })}
  </div>
  )
}

export default ItemList