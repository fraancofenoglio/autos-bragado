import { useState } from "react";
import SimpleSearch from "../components/SimpleSearch";
import {autos} from '../autos.js';

const Compra = () => {

    const [minPrice, setMinPrice] = useState(200000);
    const [maxPrice, setMaxPrice] = useState(10000000);
    const [minYear, setMinYear] = useState(2000);
    const [maxYear, setMaxYear] = useState(2023);
    const [MARCA, setMARCA] = useState("");
    const [MODELO, setMODELO] = useState("");
    const [COMBUSTIBLE, setCOMBUSTIBLE] = useState("");
    const [KILOMETROS, setKILOMETROS] = useState(100000);

    const [resultados, setResultados] = useState(autos);

    // const {marca, modelo, combustible, transmision, motor, color, precio, año, km, descripcion, imagenes } = autos;

    
    const marcasUnicas = Array.from(new Set(autos.map((auto) => auto.marca)));
    const modelosUnicos = Array.from(new Set(autos.filter(auto => auto.marca.toLowerCase() === MARCA).map(auto => auto.modelo)));



    const marcaFilter = auto => MARCA ? auto.marca.toLowerCase() === MARCA : auto;

    const modeloFilter = auto => MODELO ? auto.modelo.toLowerCase() === MODELO : auto;

    const combustibleFilter = (auto) => COMBUSTIBLE ? auto.combustible.toLowerCase() === COMBUSTIBLE : auto;

    const kmFilter = auto => KILOMETROS ? auto.km <= KILOMETROS : auto;

    const precioMinFilter = auto => minPrice ? auto.precio >= minPrice : auto;

    const precioMaxFilter = auto => maxPrice ? auto.precio <= maxPrice : auto;

    const yearMinFilter = auto => minYear ? auto.year >= minYear : auto;

    const yearMaxFilter = (auto) => maxYear ? auto.year <= maxYear : auto;

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
                {marcasUnicas.map((marca, i) => <option value={marca} key={i}>{marca}</option>)}

            </select>

            <select className="compra-select" onChange={ e => setMODELO(e.target.value.toLowerCase())}>
              <option value={""}>Todos los modelos</option>

              {modelosUnicos.map((modelo, i) => (
                <option value={modelo} key={i}>{modelo}</option>
            ))}

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
            <input className="rangos" value={minYear} type="range" min={2000} max={2023} step={1} onChange={(e)=> setMinYear(e.target.value)}></input>

            <span>Año Máximo: <strong>{maxYear}</strong></span>
            <input className="rangos" value={maxYear} type="range" min={2000} max={2023} step={1} onChange={(e)=> setMaxYear(e.target.value)}></input>

            <input className="form-search-btn" type="submit" value="BUSCAR"></input>


        </form>

        <section className="resultados-busqueda">
            {
             resultados && resultados.length !== 0 ?
                <>
                {resultados.map((auto, i) => (
                    <div className="card" key={i}>
                        <img className="card-img" src={auto.imagenes[0]} alt="" />
                        <h4 className="card-title">{auto.marca + " " + auto.modelo}</h4>
                        <span>{auto.motor}</span>
                        <p className="card-info">{`${auto.year} / ${auto.combustible} / ${auto.transmision}`}</p>
                        <p className="card-km">{` ${auto.km} km`}</p>
                        <h4 className="card-precio">${auto.precio}</h4>
                        <button className="card-button">VER</button>
                    </div>
                    ))
                }
                </>
                : <></>
            }
        </section>
    </>
  )
}

export default Compra