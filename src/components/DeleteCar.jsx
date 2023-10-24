import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore/lite";
import { db } from "../firebase/config";
import Loader from "./Loader";



const DeleteCar = ({openDelete, setOpenDelete, toDelete, setSubmited, submited}) => {

    const {id} = toDelete;
    const [loading, setLoading] = useState(false)


    const handleSubmit = async () => {
        setLoading(true)
        const docToDelete = doc(db, "vehicles", id);

        try {
            await deleteDoc(docToDelete)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
            setOpenDelete(false);
            setSubmited(!submited);
        }
    }

  return (
    <div className={`modal-container ${openDelete && "modal-open"}`} onClick={() => {
        setOpenDelete(false);

    }}>
        <div className="modal"  style={{height: "200px", justifyContent: "space-around", overflow: "hidden"}} onClick={(e) => e.stopPropagation()}>

            <h5>¿Seguro desea eliminar el vehículo?</h5>

            <div className="confirm-container">
                <button className="modal-buttons" onClick={ () => {
                    handleSubmit()
                }} id="confirm">{loading ? <Loader/> : "CONFIRMAR"}</button>

                <button className="modal-buttons cancel" onClick={ () => {
                    setOpenDelete(false)
                }} id="cancel">CANCELAR</button>
            </div>

        </div>
    </div>
  )
}

export default DeleteCar