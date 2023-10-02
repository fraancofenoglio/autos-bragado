import { useState, useEffect } from "react";
import AddCar from "../components/AddCar";
import useFirebase from '../firebase/utils.js'
import EditCar from "../components/EditCar";
import DeleteCar from "../components/DeleteCar";

const Admin = () => {

    const [selected, setSelected] = useState(false);

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    
    const [vehicle, setVehicle] = useState({});
    const {getData, data} = useFirebase();

    useEffect(() => {
        getData()
    },[])
    
  return (
    <>
        <div className="admin-nav">

            <button style={selected ? {backgroundColor: "#f8f9ff"} : {backgroundColor: "#eb5f2852"}} type="button" onClick={() => setSelected(false)}>Editar/Eliminar vehículo</button>

            <button style={selected ? {backgroundColor: "#eb5f2852"} : {backgroundColor: "#f8f9ff"}} type="button" onClick={() => setSelected(true)}>Agregar nuevo vehículo</button>
        </div>

        {
            selected ? <AddCar></AddCar>

            : <>
            <section className="edit-container">
                <h4 className="edit-title">Lista de vehículos</h4>
                <h5>Editar o eliminar</h5>
            </section>
            
            <section className="list-item-container">
            {
                data && data.map((d, i) => (
                    <div className="list-item" key={i}>
                        <img src={d.imagenes[0]} alt=""  style={{width: "60px", height: "40px"}}/>

                        <div className="info-item-container first-item">
                            <p>{d.marca}</p>
                            <p>{d.modelo}</p>
                        </div>
                        <div className="info-item-container">
                            <p>Mod: {d.year}</p>
                            <p>{d.km} km</p>
                        </div>
                        <p>${d.precio}</p>

                        <div className="button-item-container">
                            <button onClick={() => {
                                setOpen(true)
                                setVehicle(d)
                            }}>Editar
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/></svg>
                            </button>
                                    
                            <button onClick={(e) => {
                                setOpenDelete(true)
                                setVehicle(d)
                            }}>Eliminar
                                 <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                        </div>
                    </div>
                ))
            }
            </section>

            {
                open ? <EditCar open={open} setOpen={setOpen} edit={vehicle}></EditCar> : <></>
            }

            {
                openDelete ? <DeleteCar openDelete={openDelete} setOpenDelete={setOpenDelete} toDelete={vehicle}></DeleteCar> : <></>
            }
            
            </>
        }
    </>
  )
}

export default Admin