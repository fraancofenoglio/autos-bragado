import { useState } from "react";
import SimpleSearch from "../components/SimpleSearch";
import {autos} from '../autos.js';

const Compra = () => {

    const [minPrice, setMinPrice] = useState(200000);
    const [maxPrice, setMaxPrice] = useState(10000000);
    const [minYear, setMinYear] = useState(2010);
    const [maxYear, setMaxYear] = useState(2023);
    const [MARCA, setMARCA] = useState("");
    const [MODELO, setMODELO] = useState("");
    const [COMBUSTIBLE, setCOMBUSTIBLE] = useState("");
    const [KILOMETROS, setKILOMETROS] = useState(100000);

    const [resultados, setResultados] = useState();

    const {marca, modelo, combustible, transmision, motor, color, precio, año, km, descripcion, imagenes } = autos;

    console.log(resultados)

    const marcaFilter = (auto) => {
        if (MARCA) {
            return auto.marca.toLowerCase() === MARCA 
        }
        return auto
    };

    const modeloFilter = (auto) => {
        if(MODELO){
            return auto.modelo.toLowerCase() === MODELO
        }
        return auto
    };

    const combustibleFilter = (auto) => {
        if(COMBUSTIBLE) {
            return auto.combustible.toLowerCase() === COMBUSTIBLE
        }
        return auto
    };

    const kmFilter = (auto) => {
        if (KILOMETROS) {
            return auto.km <= KILOMETROS
        }
        return auto
    };

    const precioMinFilter = (auto) => {
        if (minPrice) {
            return auto.precio >= minPrice
        }
        return auto
    };

    const precioMaxFilter = (auto) => {
        if (maxPrice) {
            return auto.precio <= maxPrice
        }
        return auto
    };

    const yearMinFilter = (auto) => {
        if (minYear) {
            return auto.year >= minYear
        }
        return auto
    };

    const yearMaxFilter = (auto) => {
        if (maxYear) {
            return auto.year <= maxYear
        }
        return auto
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setResultados(autos.filter(marcaFilter).filter(modeloFilter).filter(combustibleFilter).filter(kmFilter).filter(precioMinFilter).filter(precioMaxFilter).filter(yearMinFilter).filter(yearMaxFilter))
    }

  return (
    <>
        <SimpleSearch/>

        <form className="form-compra-buscador" onSubmit={handleSubmit}>

            <select className="compra-select" onChange={ e => setMARCA(e.target.value.toLowerCase())}>
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

            <select className="compra-select" onChange={ e => setMODELO(e.target.value.toLowerCase())}>
              <option value={""}>Todos los modelos</option>
              <option value={"corsa"}>Corsa</option>
              <option value={"cruze"}>Cruze</option>
              <option value={"s10"}>S10</option>
              <option value={"tracker"}>Tracker</option>
              <option value={"astra"}>Astra</option>
              <option value={"fiesta"}>Fiesta</option>
            </select>

            <select className="compra-select" onChange={ e => setCOMBUSTIBLE(e.target.value.toLowerCase())}>
              <option value={""}>Todos los combustibles</option>
              <option value={"nafta"}>Nafta</option>
              <option value={"diesel"}>Diésel</option>
              <option value={"gnc"}>GNC</option>
              <option value={"electrico"}>Eléctrico</option>
            </select>

            <select className="compra-select" onChange={ e => setKILOMETROS(e.target.value.toLowerCase())}>
              <option value={""}>Kilometraje</option>
              <option value={20000}>Menor a 20000km</option>
              <option value={50000}>Menor a 50000km</option>
              <option value={80000}>Menor a 80000km</option>
              <option value={100000}>Menor a 100000km</option>

            </select>

            <span>Precio Mínimo: <strong>{minPrice}</strong></span>
            <input className="rangos" value={minPrice} type="range" min={200000} max={10000000} step={100000} onChange={(e)=>setMinPrice(e.target.value)}
            ></input>

            <span>Precio Máximo: <strong>{maxPrice}</strong></span>
            <input className="rangos" value={maxPrice} type="range" min={200000} max={10000000} step={100000} onChange={(e)=> setMaxPrice(e.target.value)}></input>

            <span>Año Mínimo: <strong>{minYear}</strong></span>
            <input className="rangos" value={minYear} type="range" min={2010} max={2023} step={1} onChange={(e)=> setMinYear(e.target.value)}></input>

            <span>Año Máximo: <strong>{maxYear}</strong></span>
            <input className="rangos" value={maxYear} type="range" min={2010} max={2023} step={1} onChange={(e)=> setMaxYear(e.target.value)}></input>

            <input className="form-search-btn" type="submit" value="BUSCAR"></input>


        </form>

        <div>
            {
             resultados ?
                <>
                {resultados.map((auto, i) => (
                    <h3 key={i}>{auto.modelo}</h3>
                    ))
                }
                </>
                : <>nada</>
            }
        </div>
    </>
  )
}

export default Compra