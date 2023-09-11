import { useState } from "react";
import AddCar from "../components/AddCar";
import useFirebase from '../firebase/utils.js'
import { useEffect } from "react";
// import { useEffect } from "react";

const Admin = () => {

    const [selected, setSelected] = useState(false)
    const {getData, data} = useFirebase();

    useEffect(() => {
        getData()
    },[])
    
    console.log(data)


    // useEffect( () => {

    //     const get = async () => {
    //         const promise = await getData()
    //         setData(promise) 
    //     }

    // },[])
    // console.log(data)
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

            
                    {
                        data && data.map((d, i) => (
                            // <p key={i}>{d.marca}</p>
                            <div className="list-item" key={i}>
                                <img src={d.imagenes[0]} alt=""  style={{width: "70px", height: "50px"}}/>
                                <p>{}</p>
            
            
                            </div>
                        ))
                    }
            
            </>
        }
    </>
  )
}

export default Admin