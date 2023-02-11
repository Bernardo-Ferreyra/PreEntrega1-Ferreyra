import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import HomeCarousel from "./HomeCarousel"
import BannerConditional from "./BannerConditional"


function ItemListContainer() {

  const [items, setItems] = useState([])
  const parametro = useParams();

  useEffect(()=> {

    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos')

    if(parametro.nombreCategoria){
      const queryFilter = query(queryCollection, where('categoria', '==', parametro.nombreCategoria))
      getDocs(queryFilter)
      .then(res => setItems( res.docs.map(product => ({id: product.id, ...product.data() }))) )
      .catch(error =>console.log(error))

    }else{
      getDocs(queryCollection)
      .then(res => setItems( res.docs.map(product => ({id: product.id, ...product.data() }))) )
      .catch(error =>console.log(error))
    }

  }, [parametro.nombreCategoria]);



  return (

    <div>
      <HomeCarousel />
      <BannerConditional categoria={parametro.nombreCategoria} />
      <ItemList items={items} />
    </div>
    
  )
}
  
export default ItemListContainer