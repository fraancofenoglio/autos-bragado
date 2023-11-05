import { useContext } from "react";
import SearchContext from '../context/SearchContext'
import SimpleSearch from "../components/SimpleSearch";
import Footer from "../components/Footer";
import ResultadosBusqueda from "../components/ResultadosBusqueda";
import { useEffect } from "react";

const Compra = () => {

  const { minPrice,setMinPrice,maxPrice,setMaxPrice,minYear,setMinYear,maxYear,setMaxYear,MARCA,setMARCA,MODELO,setMODELO,COMBUSTIBLE,setCOMBUSTIBLE,KILOMETROS,setKILOMETROS,resultados,setResultados,autosDB, marcasUnicas, modelosUnicos, click, setClick} = useContext(SearchContext);
    
  // console.log("compra", resultados)
  // console.log(click)

  // eliminar los console.log

    useEffect(()=>{
      setResultados(autosDB)
    },[autosDB])

    useEffect(()=>{
      if(click === true) {
        setResultados(resultados)
      } else {
        setResultados(autosDB)
      }
    },[])

    // useEffect(() => {
    //   window.addEventListener('popstate', ()=> {
    //       console.log("ejecutado")
    //       setClick(true)
    //   });
   
    // }, []);


    const marcaFilter = (auto) => {
      if (MARCA && auto.marca) {
        return auto.marca.toLowerCase() === MARCA.toLowerCase();
      }
      return true;
    };
    
    const modeloFilter = (auto) => {
      if (MODELO && auto.modelo) {
        return auto.modelo.toLowerCase() === MODELO.toLowerCase();
      }
      return true;
    };
    
    const combustibleFilter = (auto) => {
      if (COMBUSTIBLE && auto.combustible) {
        return auto.combustible.toLowerCase() === COMBUSTIBLE.toLowerCase();
      }
      return true;
    };
    
    const kmFilter = (auto) => {
      if (KILOMETROS && auto.km) {
        return auto.km <= parseInt(KILOMETROS, 10);
      }
      return true;
    };

    const precioMinFilter = auto => minPrice ? auto.precio >= minPrice : auto;

    const precioMaxFilter = auto => maxPrice ? auto.precio <= maxPrice : auto;

    const yearMinFilter = auto => minYear && auto.year ? auto.year >= minYear : auto;

    const yearMaxFilter = (auto) => maxYear && auto.year && auto.year ? auto.year <= maxYear : auto;

    const handleSubmit = (e) => {
        e.preventDefault();
      console.log(autosDB, MARCA, MODELO, COMBUSTIBLE, KILOMETROS)


        setResultados(autosDB.filter(marcaFilter).filter(modeloFilter).filter(combustibleFilter).filter(kmFilter).filter(precioMinFilter).filter(precioMaxFilter).filter(yearMinFilter).filter(yearMaxFilter))
    }

  return (
    <>
        <SimpleSearch/>
        <div className="compra-container">
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
              <option value={"gasoil"}>Gasoil</option>
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

        <ResultadosBusqueda/>

       </div>

        <Footer></Footer>
    </>
  )
}

export default Compra