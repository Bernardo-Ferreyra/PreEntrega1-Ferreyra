import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter> 
    <NavBar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer title ='Bienvenido a my-ecommerce'/>} />
        <Route path='/item/:id' element= {<ItemDetailContainer />} />
        <Route path='/categoria/:nombreCategoria' element= {<ItemListContainer />} />
        <Route path='/carrito' element={<Carrito/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
