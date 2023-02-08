import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {getFirestore, doc, getDoc} from 'firebase/firestore'



const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const parametro = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', parametro.id )
    getDoc(queryDoc)
    .then(res => setItem({id: res.id, ...res.data()}))
    .catch(error =>console.log(error));

  },[parametro.id])


  return (

    <ItemDetail item={item}/>
    
  )
}

export default ItemDetailContainer