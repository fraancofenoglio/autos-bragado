import { useState, useEffect, useContext } from "react";
import AddCar from "../components/AddCar";
import useFirebase from '../firebase/utils.js'

import SearchContext from "../context/SearchContext";
import Edit from "../components/Edit";

const Admin = () => {

    const [selected, setSelected] = useState(false);
    const [submited, setSubmited] = useState(false);

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    
    const [vehicle, setVehicle] = useState({});
    const {getData, data} = useFirebase();

    const { setResultados} = useContext(SearchContext);

    useEffect(() => {
        console.log("useeffect")
        getData()
        setResultados(data)
    },[submited])

// agregar un modal que diga eliminado o modificado y un boton para actualizar los autos
    
  return (
    <>
        <div className="admin-nav">

            <button style={selected ? {backgroundColor: "#f8f9ff"} : {backgroundColor: "#eb5f2852"}} type="button" onClick={() => setSelected(false)}>Editar/Eliminar vehículo</button>

            <button style={selected ? {backgroundColor: "#eb5f2852"} : {backgroundColor: "#f8f9ff"}} type="button" onClick={() => setSelected(true)}>Agregar nuevo vehículo</button>
        </div>

        {
            selected ? <AddCar></AddCar>

            : <Edit open={open} setOpen={setOpen} openDelete={openDelete} setOpenDelete={setOpenDelete} data={data} vehicle={vehicle} setVehicle={setVehicle} setSubmited={setSubmited} submited={submited}></Edit>
        }
    </>
  )
}

export default Admin