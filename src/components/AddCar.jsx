import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc} from "firebase/firestore/lite";
import { storage, db } from "../firebase/config";
import IMGselector from "../components/IMGselector";
import { v4 } from "uuid";
import Loader from "./Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCar = () => {
    
    const [num, setNum] = useState([0]);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [executed, setExecuted] = useState(false)
    const signal = () => toast.success("¡Vehículo agregado!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [combustible, setCombustible] = useState("");
    const [transmision, setTransmision] = useState("");
    const [motor, setMotor] = useState("");
    const [color, setColor] = useState("");
    const [precio, setPrecio] = useState("");
    const [año, setAño] = useState("");
    const [kilometros, setKilometros] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const pop = (array) => array.pop()

    const resetForm = () => {
        setMarca("");
        setModelo("");
        setCombustible("");
        setTransmision("");
        setMotor("");
        setColor("");
        setPrecio("");
        setAño("");
        setKilometros("");
        setDescripcion("");
        setNum([0]);
        setFiles([]);
        setExecuted(!executed)
    }

    const condition = files && marca && modelo && combustible && transmision && motor && color && precio > 0 && año > 0 && kilometros >= 0 && descripcion;
    
    const uploadFile = async () => {

        try {

            const promises = files.map( async (file) =>{
    
                const storageRef = ref(storage, `images/${v4()}`);
                await uploadBytes(storageRef, file.file);
                return await getDownloadURL(storageRef);
            });
            
            const urls = await Promise.all(promises)
            signal()
            return urls

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (condition) {
            try {
                setLoading(true)
                const uploaded = await uploadFile();
                const newDoc = {
                    marca: marca,
                    modelo: modelo,
                    combustible: combustible,
                    transmision: transmision,
                    motor: motor,
                    color: color,
                    precio: precio,
                    year: año,
                    km: kilometros,
                    descripcion: descripcion,
                    imagenes: uploaded,
                    id: v4()

                };

                const docRef = doc(db, "vehicles", newDoc.id);
                
                await setDoc(docRef, newDoc);

            } catch (error) {
                console.log(error)
            } finally {
                resetForm()
                setLoading(false);
                
            }
        }
    }
  return (
    <section className="admin-container">

        <h4>Agregar un nuevo vehículo</h4>

        <h5>Agrega hasta 10 fotos del vehículo.</h5>
        <div className="add-img">
            {
                num.map((n) => (
                    <IMGselector num={n} uploadFile={uploadFile} key={n+1} setFiles={setFiles} files={files} executed={executed} ></IMGselector>
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
                    pop(num);
                    pop(files);
                    setNum([...num]);
                }
            }}>Eliminar última imagen</button>
            }
        </div>

        <div className="form-add-container">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-331.999 226.434-585.565 283-642.131l197 198 197-197 56.566 56.566L480-331.999Z"/></svg>

            <h5>Agrega los datos del vehículo.</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <span className="span-add">Marca</span>
                    <input type="text" name="add-marca" id="add-marca" placeholder="ej: Chevrolet" required value={marca} onChange={(e) => setMarca(e.target.value)}/>
                </div>
                <div>
                    <span className="span-add">Modelo</span>
                    <input type="text" name="add-modelo" id="add-modelo" placeholder="ej: Astra" required value={modelo} onChange={(e) => setModelo(e.target.value)}/>
                </div>

                <div>
                    <span className="span-add">Combustible</span>
                    <select name="add-combustible" id="add-combustible" required value={combustible} onChange={(e) => setCombustible(e.target.value)}>
                        <option value="">-Seleccione-</option>
                        <option value="nafta">Nafta</option>
                        <option value="gasoil">Gasoil</option>
                        <option value="gnc">GNC</option>
                        <option value="electrico">Eléctrico</option>
                    </select>
                </div>

                <div>
                    <span className="span-add">Transmisión</span>
                    <select name="add-transmision" id="add-transmision" placeholder="seleccione" required value={transmision} onChange={(e) => setTransmision(e.target.value)}>
                        <option value="">-Seleccione-</option>
                        <option value="manual">Manual</option>
                        <option value="automatica">Automática</option>
                    </select>
                </div>

                <div>
                    <span className="span-add">Motor</span>
                    <input type="text" name="add-motor" id="add-motor" placeholder="ej: 1.9" required value={motor} onChange={(e) => setMotor(e.target.value)}/>
                </div>

                <div>
                    <span className="span-add">Color</span>
                    <input type="text" name="add-color" id="add-color" placeholder="ej: Gris Plata" required value={color} onChange={(e) => setColor(e.target.value)}/>
                </div>

                <div>
                    <span className="span-add">Precio</span>
                    <input type="number" name="add-precio" id="add-precio" placeholder="ej: 3500000" required value={precio} onChange={(e) => setPrecio(parseInt(e.target.value))}/>
                </div>

                <div>
                    <span className="span-add">Año</span>
                    <input type="number" name="add-año" id="add-año" placeholder="ej: 2010" required value={año} onChange={(e) => setAño(parseInt(e.target.value))}/>
                </div>

                <div style={{height: "100%"}}>
                    <span className="span-add">Kilómetros</span>
                    <input type="number" name="add-km" id="add-km" placeholder="ej: 20000" required value={kilometros} onChange={(e) => setKilometros(parseInt(e.target.value))}/>
                </div>

                <div>
                    <span className="span-add">Descripción</span>
                    <textarea name="add-descripcion" id="add-descripcion" cols="30" rows="10" placeholder="ej: MUY BUEN ESTADO DE USO Y MANTENIMIENTO, ÚNICO TITULAR, LISTO PARA TRANSFERIR RADICADO EN CIUDAD DE BUENOS AIRES, TODOS LOS SERVICIOS RECIEN REALIZADOS." required value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                </div>
                <div className="submit-add-btn">
                    <button type="submit"> { loading ? <Loader/> : "AGREGAR VEHÍCULO"}</button>
                </div>

            </form>
        </div>
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

    </section>
  )
}

export default AddCar