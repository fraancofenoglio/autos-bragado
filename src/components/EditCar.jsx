import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore/lite";
import { db } from "../firebase/config";



const EditCar = ({open, setOpen, edit}) => {

    const {marca, modelo, year, combustible, km, transmision, motor, color, precio, descripcion, id} = edit;

    const [marcaEdit, setMarcaEdit] = useState(marca);
    const [modeloEdit, setModeloEdit] = useState(modelo);
    const [combustibleEdit, setCombustibleEdit] = useState(combustible);
    const [transmisionEdit, setTransmisionEdit] = useState(transmision);
    const [motorEdit, setMotorEdit] = useState(motor);
    const [colorEdit, setColorEdit] = useState(color);
    const [precioEdit, setPrecioEdit] = useState(precio);
    const [añoEdit, setAñoEdit] = useState(year);
    const [kilometrosEdit, setKilometrosEdit] = useState(km);
    const [descripcionEdit, setDescripcionEdit] = useState(descripcion);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const docEditRef = doc(db, "vehicles", id);

        try {
            
            const edicion = await updateDoc(docEditRef, {
                marca: marcaEdit,
                modelo: modeloEdit,
                year: añoEdit,
                combustible: combustibleEdit,
                km: kilometrosEdit,
                transmision: transmisionEdit,
                motor: motorEdit,
                color: colorEdit,
                precio: precioEdit,
                descripcion: descripcionEdit
            })
            console.log(edicion)
        } catch (error) {
            console.log(error)
        } finally {
            setOpen(false)
        }


    }

  return (
    <div className={`modal-container ${open && "modal-open"}`} onClick={() => {
        setOpen(false);

    }}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>

            <h5>Edición de vehículo</h5>

            <form className="edit-form" onSubmit={handleSubmit}>

                <span className="edit-span">Marca</span>
                <input type="text" name="" id="" value={marcaEdit} onChange={(e) => setMarcaEdit(e.target.value)}/>

                <span className="edit-span">Modelo</span>
                <input type="text" name="" id="" value={modeloEdit} onChange={(e) => setModeloEdit(e.target.value)}/>

                <span className="edit-span">Combustible</span>
                <select name="add-combustible" id="add-combustible" value={combustibleEdit} onChange={(e) => setCombustibleEdit(e.target.value)}>
                    <option value="nafta">Nafta</option>
                    <option value="gasoil">Gasoil</option>
                    <option value="gnc">GNC</option>
                    <option value="electrico">Eléctrico</option>
                </select>

                <span className="edit-span">Transmisión</span>
                <select name="add-transmision" id="add-transmision" placeholder="seleccione" value={transmisionEdit} onChange={(e) => setTransmisionEdit(e.target.value)}>

                    <option value="manual">Manual</option>
                    <option value="automatica">Automática</option>
                </select>

                <span className="edit-span">Motor</span>
                <input type="text" name="" id="" value={motorEdit} onChange={(e) => setMotorEdit(e.target.value)}/>

                <span className="edit-span">Color</span>
                <input type="text" name="" id="" value={colorEdit} onChange={(e) => setColorEdit(e.target.value)}/>

                <span className="edit-span">Precio</span>
                <input type="number" name="" id="" value={precioEdit} onChange={(e) => setPrecioEdit(e.target.value)}/>

                <span className="edit-span">Año</span>
                <input type="number" name="" id="" value={añoEdit} onChange={(e) => setAñoEdit(e.target.value)}/>

                <span className="edit-span">Kilómetros</span>
                <input type="number" name="" id="" value={kilometrosEdit} onChange={(e) => setKilometrosEdit(e.target.value)}/>

                <span className="edit-span">Descripción</span>
                <textarea name="edit-descripcion" id="edit-descripcion" cols="40" rows="3" value={descripcionEdit} onChange={(e) => setDescripcionEdit(e.target.value)} style={{resize: "none"}}></textarea>

                <div className="confirm-container">
                    <button className="modal-buttons" type="submit" id="confirm">CONFIRMAR</button>

                    <button className="modal-buttons" id="cancel" onClick={ () => {
                        setOpen(false)
                    }}>CANCELAR</button>
                </div>

            </form>


        </div>
    </div>
  )
}

export default EditCar