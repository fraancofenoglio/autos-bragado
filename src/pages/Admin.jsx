import { useContext } from "react";
import SearchContext from "../context/SearchContext";

const Admin = () => {
    
    const { setUser} = useContext(SearchContext);
  return (
    <div>
         usar el storage y firestore para guardar imagenes y objetos con los datos de cada auto del lado del admin

    </div>
  )
}

export default Admin