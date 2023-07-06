import { useState } from "react"
import SimpleSearch from "../components/SimpleSearch"

const Compra = () => {
    const [minPrice, setMinPrice] = useState(2017)
    const [maxPrice, setMaxPrice] = useState(2017)
    const [minYear, setMinYear] = useState(2017)
    const [maxYear, setMaxYear] = useState(2017)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
        <SimpleSearch/>

        <form className="form-compra-buscador" onSubmit={handleSubmit}>

            <select className="compra-select">
                <option value={""}> Todas las marcas </option>
                <option value={"volkswagen"}>VOLKSWAGEN</option>
                <option value={"ford"}>FORD</option>
                <option value={"chevrolet"}>CHEVROLET</option>
                <option value={"fiat"}>FIAT</option>
                <option value={"renault"}>RENAULT</option>
                <option value={"toyota"}>TOYOTA</option>
                <option value={"citroen"}>CITROEN</option>
                <option value={"peugeot"}>PEUGEOT</option>
                <option value={"honda"}>HONDA</option>
                <option value={"nissan"}>NISSAN</option>
                <option value={"audi"}>AUDI</option>
                <option value={"bmw"}>BMW</option>
            </select>

            <select className="compra-select">
              <option value={""}>Todos los modelos</option>
              <option value={"corsa"}>Corsa</option>
              <option value={"cruze"}>Cruze</option>
              <option value={"s10"}>S10</option>
              <option value={"tracker"}>Tracker</option>
            </select>

            <select className="compra-select">
              <option value={""}>Todos los combustibles</option>
              <option value={"nafta"}>Nafta</option>
              <option value={"diesel"}>Diésel</option>
              <option value={"gnc"}>GNC</option>
              <option value={"electrico"}>Eléctrico</option>
            </select>

            <select className="compra-select">
              <option value={""}>Manual y Automática</option>
              <option value={"manual"}>Manual</option>
              <option value={"automatica"}>Automática</option>

            </select>

            <span>Precio Mínimo: <strong>{minPrice}</strong></span>
            <input className="rangos" value={minPrice} type="range" min={2010} max={2023} step={1} onChange={(e)=>setMinPrice(e.target.value)}
            ></input>

            <span>Precio Máximo: <strong>{maxPrice}</strong></span>
            <input className="rangos" value={maxPrice} type="range" min={2010} max={2023} step={1} onChange={(e)=> setMaxPrice(e.target.value)}></input>

            <span>Año Mínimo: <strong>{minYear}</strong></span>
            <input className="rangos" value={minYear} type="range" min={2010} max={2023} step={1} onChange={(e)=> setMinYear(e.target.value)}></input>

            <span>Año Máximo: <strong>{maxYear}</strong></span>
            <input className="rangos" value={maxYear} type="range" min={2010} max={2023} step={1} onChange={(e)=> setMaxYear(e.target.value)}></input>
            

            sucursales


        </form>
    </>
  )
}

export default Compra