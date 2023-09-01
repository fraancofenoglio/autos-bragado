import { useState } from "react";
// import SearchContext from "../context/SearchContext";
import IMGselector from "../components/IMGselector";

const Admin = () => {

    const [num, setNum] = useState([0])
    const [imgs, setImgs] = useState([])

    const pop = (array) => array.pop()

    console.log(imgs)
    console.log(num)
    // const { setUser} = useContext(SearchContext);
  return (
    <div className="admin-container">
         {/* -armar una interfaz para cargar los datos de cada autos

         -puedo hacer un componente que sirva para subir u archivo cada uno y que de ahi obtenga esa URL y quede almacenada en un estado global (array) para luego subirlo a firestore

         -o puedo repetir 10 input-file= */}

         {/* {num.length} */}
         <h4>Agregar un nuevo vehículo</h4>

        <h5>Agrega hasta 10 fotos del vehículo.</h5>
        <div className="add-img">
            {
                num.map((n) => (
                    <IMGselector key={n+1} imgs={imgs} setImgs={setImgs}></IMGselector>
                ))
            }

        </div>
        
        <div className="btn-add-container">
            {
                num.length < 10 &&
            <button className="add-img-btn" onClick={() => num.length < 10 && setNum([...num, Math.random(3)]) }>Agregar otra imagen</button>
            }

            {
            (num.length <= 10 && num.length >= 2) &&
            <button className="add-img-btn" onClick={() => {
                if (num.length <= 10 && num.length >= 2) {
                    pop(num)
                    pop(imgs)
                    setNum([...num])
                    setImgs([...imgs])
                }
            }}>Eliminar última imagen</button>
            }
        </div>

        <div className="form-add-container">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-331.999 226.434-585.565 283-642.131l197 198 197-197 56.566 56.566L480-331.999Z"/></svg>

            <h5>Agrega los datos del vehículo.</h5>
            <form>
                <div>
                    <span className="span-add">Marca</span>
                    <input type="text" name="add-marca" id="add-marca" placeholder="ej: Chevrolet" required/>
                </div>
                <div>
                    <span className="span-add">Modelo</span>
                    <input type="text" name="add-modelo" id="add-modelo" placeholder="ej: Astra" required/>
                </div>

                <div>
                    <span className="span-add">Combustible</span>
                    <select name="add-combustible" id="add-combustible" required>
                        <option value="">-Seleccione-</option>
                        <option value="nafta">Nafta</option>
                        <option value="gasoil">Gasoil</option>
                        <option value="gnc">GNC</option>
                        <option value="electrico">Eléctrico</option>
                    </select>
                </div>

                <div>
                    <span className="span-add">Transmisión</span>
                    <select name="add-transmision" id="add-transmision" placeholder="seleccione" required>
                        <option value="">-Seleccione-</option>
                        <option value="manual">Manual</option>
                        <option value="automatica">Automática</option>
                    </select>
                </div>

                <div>
                    <span className="span-add">Motor</span>
                    <input type="text" name="add-motor" id="add-motor" placeholder="ej: 1.9" required/>
                </div>

                <div>
                    <span className="span-add">Color</span>
                    <input type="text" name="add-color" id="add-color" placeholder="ej: Gris Plata" required/>
                </div>

                <div>
                    <span className="span-add">Precio</span>
                    <input type="number" name="add-precio" id="add-precio" placeholder="ej: 3500000" required/>
                </div>

                <div>
                    <span className="span-add">Año</span>
                    <input type="number" name="add-año" id="add-año" placeholder="ej: 2010" required/>
                </div>

                <div style={{height: "100%"}}>
                    <span className="span-add">Kilómetros</span>
                    <input type="number" name="add-km" id="add-km" placeholder="ej: 20000" required/>
                </div>

                <div>
                    <span className="span-add">Descripción</span>
                    <textarea name="add-descripcion" id="add-descripcion" cols="30" rows="10" placeholder="ej: MUY BUEN ESTADO DE USO Y MANTENIMIENTO, ÚNICO TITULAR, LISTO PARA TRANSFERIR RADICADO EN CIUDAD DE BUENOS AIRES, TODOS LOS SERVICIOS RECIEN REALIZADOS." required></textarea>
                </div>
                <div className="submit-add-btn">
                    <button type="submit">AGREGAR VEHÍCULO</button>
                </div>

            </form>
        </div>
        

    </div>
  )
}

export default Admin