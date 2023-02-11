import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartProvider';


function App() {

  return (
    <BrowserRouter> 
    <CartProvider>
    <NavBar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer />} />
        <Route path='/item/:id' element= {<ItemDetailContainer />} />
        <Route path='/categoria/:nombreCategoria' element= {<ItemListContainer />} />
        <Route path='/carrito' element={<Carrito/>} />
      </Routes>
    <Footer/>
    </CartProvider>
    </BrowserRouter>

  );
}

export default App;
