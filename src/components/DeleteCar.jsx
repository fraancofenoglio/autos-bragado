// import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore/lite";
import { db } from "../firebase/config";



const DeleteCar = ({openDelete, setOpenDelete, toDelete}) => {

    const {id} = toDelete;


    const handleSubmit = async () => {
        const docToDelete = doc(db, "vehicles", id);

        try {
            await deleteDoc(docToDelete)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className={`modal-container ${openDelete && "modal-open"}`} onClick={() => {
        setOpenDelete(false);

    }}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>

            <h5>¿Seguro desea eliminar el vehículo?</h5>

            <div className="confirm-container">
                <button className="modal-buttons" onClick={ () => {
                    handleSubmit()
                }} id="confirm">CONFIRMAR</button>

                <button className="modal-buttons cancel" onClick={ () => {
                    setOpenDelete(false)
                }} id="cancel">CANCELAR</button>
            </div>

        </div>
    </div>
  )
}

export default DeleteCar