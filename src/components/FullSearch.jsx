import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";


const FullSearch = () => {

  const navigate = useNavigate()
  
  const {minPrice,setMinPrice,maxPrice,setMaxPrice,MARCA,setMARCA,MODELO,setMODELO, KILOMETROS, setKILOMETROS, autos, autosDB, setResultados, modelosUnicos, marcasUnicas, setClick} = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setResultados(autosDB.filter(marcaFilter).filter(modeloFilter).filter(precioMinFilter).filter(precioMaxFilter).filter(kmFilter));
    
    setClick(true)
    navigate("/compra");
    window.scroll(0,0)

    setTimeout(() => {
      if (window.innerWidth < 800){
        window.scroll({top: 800, left: 0, behavior: "smooth"})
      }
    }, 500);
  }


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

  const kmFilter = (auto) => {
    if (KILOMETROS && auto.km) {
      console.log(KILOMETROS, auto.km)
      return parseInt(auto.km, 10) <= parseInt(KILOMETROS, 10);
    }
    return true;
  };

  const precioMinFilter = auto => minPrice ? auto.precio >= minPrice : auto;

  const precioMaxFilter = auto => maxPrice ? auto.precio <= maxPrice : auto;

  if (autosDB){
   return (
    <>
      <div className="buscador-completo">

        <form className="buscador-formulario" onSubmit={handleSubmit}>
          <div className="buscador-icons">

            <img src="./assets/car-icon.png" alt="icono auto"/>
            <img src="./assets/SUV-icon.png" alt="icono SUV"/>
            <img src="./assets/pickup-icon.png" alt="icono pickup"/>

          </div>

          <div className="inputs-container">

            <select onChange={(e) => setMARCA(e.target.value.toLowerCase())}>
              <option value={""}> Todas las marcas </option>
                {marcasUnicas.map((marca, i) => <option value={marca} key={i}>{marca}
              </option>)}
            </select>

            <select value={MODELO} onChange={(e) => setMODELO(e.target.value.toLowerCase())}>
              <option value={""}>Todos los modelos</option>

              {modelosUnicos.map((modelo, i) => (
                <option value={modelo} key={i}>{modelo}</option>
              ))}
            </select>

            <select value={KILOMETROS} onChange={ e => {
              setKILOMETROS(e.target.value.toLowerCase())
              console.log(KILOMETROS)
            }}>
            <option value={""} >Kilometraje</option>
              <option value={20000}>Menor a 20000km</option>
              <option value={50000}>Menor a 50000km</option>
              <option value={80000}>Menor a 80000km</option>
              <option value={100000}>Menor a 100000km</option>
            </select>

            <span>Desde:
            <input type="number" placeholder="$" className="rango-precios" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}></input></span>
            <span>Hasta:
            <input type="number" placeholder="$" className="rango-precios" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}></input></span>

          </div>

          <input id="prueba" className="form-search-btn" type="submit" value="BUSCAR"></input>

        </form>
      </div>
    </>
  )} else {
    return <></>
  }
}

export default FullSearch