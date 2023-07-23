import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import { useNavigate } from "react-router-dom";


const FullSearch = () => {

  const navigate = useNavigate()

  const {minPrice,setMinPrice,maxPrice,setMaxPrice,MARCA,setMARCA,MODELO,setMODELO, KILOMETROS, setKILOMETROS, autos, setResultados, modelosUnicos, marcasUnicas} = useContext(SearchContext);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setResultados(autos.filter(marcaFilter).filter(modeloFilter).filter(precioMinFilter).filter(precioMaxFilter).filter(kmFilter));

    navigate("/compra");
    window.scroll(0,0)

    setTimeout(() => {
      
      window.scroll({top: 800, left: 0, behavior: "smooth"})
      console.log("se activa el 3")
    }, 500);
  }


  const marcaFilter = auto => MARCA ? auto.marca.toLowerCase() === MARCA : auto;

  const modeloFilter = auto => MODELO ? auto.modelo.toLowerCase() === MODELO : auto;

  const precioMinFilter = auto => minPrice ? auto.precio >= minPrice : auto;

  const precioMaxFilter = auto => maxPrice ? auto.precio <= maxPrice : auto;

  const kmFilter = auto => KILOMETROS ? auto.km <= KILOMETROS : auto;

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

            <select>
            <option value={""} onChange={ e => setKILOMETROS(e.target.value.toLowerCase())}>Kilometraje</option>
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
  )
}

export default FullSearch