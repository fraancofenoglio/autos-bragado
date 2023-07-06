import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Compra from '../pages/Compra';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compra' element={<Compra/>}/>
        <Route path='/venta' element={<h1>Venta</h1>}/>
        <Route path='/contacto' element={<h1>Contacto</h1>}/>

        <Route path='*' element={<h1>Not Found</h1>}/>
    </Routes>
  )
}

export default MainRoutes