import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Compra from '../pages/Compra';
import Venta from '../pages/Venta';
import Contacto from '../pages/Contacto';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compra' element={<Compra/>}/>
        <Route path='/venta' element={<Venta/>}/>
        <Route path='/contacto' element={<Contacto/>}/>

        <Route path='*' element={<h1>Not Found</h1>}/>
    </Routes>
  )
}

export default MainRoutes