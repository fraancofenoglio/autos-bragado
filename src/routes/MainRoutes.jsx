import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Compra from '../pages/Compra';
import Venta from '../pages/Venta';
import Contacto from '../pages/Contacto';
import Admin from '../pages/Admin';
import ProtectedRoute from '../components/ProtectedRoute';
import Login from '../pages/Login';
import Car from '../components/Car';
import NotFound from '../pages/NotFound';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compra' element={<Compra/>}/>
        <Route path='/compra/:id' element={<Car></Car>}/>
        <Route path='/venta' element={<Venta/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/admin' element={

          <ProtectedRoute redirectTo={"/login"}>
            <Admin/>
          </ProtectedRoute>
          }>
        </Route> 

        <Route path='*' element={<NotFound></NotFound>}/>
        <Route path='/not-found' element={<NotFound></NotFound>}/>

    </Routes>
  )
}

export default MainRoutes