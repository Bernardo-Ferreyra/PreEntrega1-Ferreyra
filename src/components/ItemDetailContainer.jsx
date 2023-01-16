import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { productos } from "../productos/productos"




const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const parametro = useParams();


  useEffect(() => {
    const getProduct= () => {
      return new Promise ((resolve, reject) => {
        const productoFiltrado = productos.find(
          (prod) => prod.id === parseInt(parametro.id)
        );
        setTimeout(()=>{
          resolve(productoFiltrado)
        }, 400)
      })
    }
    getProduct()
    .then((resolve)=>{
      setItem(resolve)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])


  return (
    <ItemDetail item={item}/>

  )
}

export default ItemDetailContainer