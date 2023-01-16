import "./styles/ItemListContainer.css"
import { useEffect, useState } from "react"
import { productos } from "../productos/productos"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import HomeCarousel from "./HomeCarousel"

function ItemListContainer(greeting) {

  const [items, setItems] = useState([])
  
  const parametro = useParams();

  useEffect(()=> {
    const getProducts = () =>{
      return new Promise((resolve, reject) => {
        const productosFiltrados = productos.filter(
          (prod) => prod.categoria === parametro.nombreCategoria
        );
        const filtro = parametro.nombreCategoria ? productosFiltrados : productos;
        setTimeout (()=>{resolve(filtro);},800);
      });
    };
    getProducts()
    .then((resolve) => {
      setItems(resolve);
    })
    .catch((error)=>{
      console.log(error);
    });
  }, [parametro.nombreCategoria]);



  return (
      <div>
        <HomeCarousel />
        <h1 className="bienvenida text-white mb-0">{greeting.title} {parametro.nombreCategoria}</h1>
        <ItemList items={items} />
      </div>
  )
}
  
export default ItemListContainer