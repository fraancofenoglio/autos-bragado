import EditCar from "../components/EditCar";
import DeleteCar from "../components/DeleteCar";
import Loader from "./Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = ({setSubmited, submited, open, setOpen, openDelete, setOpenDelete, vehicle, setVehicle, data}) => {

    const signal = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
  return (
    <>
            <section className="edit-container">
                <h4 className="edit-title">Lista de vehículos</h4>
                <h5>Editar o eliminar</h5>
            </section>
            
            <section className="list-item-container">
            {
                data ? 
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
                : <div style={{width: "100vw", display: "flex", flexDirection:"column", alignItems: "center"}}>
                    <Loader/>
                </div>
            }
            </section>

            {
                open ? <EditCar open={open} setOpen={setOpen} edit={vehicle} setSubmited={setSubmited} submited={submited} signal={signal}></EditCar> : <></>
            }

            {
                openDelete ? <DeleteCar openDelete={openDelete} setOpenDelete={setOpenDelete} toDelete={vehicle} setSubmited={setSubmited} submited={submited} signal={signal}></DeleteCar> : <></>
            }
            
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </>
  )
}

export default Edit