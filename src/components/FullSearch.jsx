
const FullSearch = ({state, setState}) => {

  const {marca, modelo, precioMin, precioMax} = state;
  const {setMarca, setModelo, setPrecioMin, setPrecioMax} = setState;

  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
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

            <select onChange={(e) => setMarca(e.target.value)}>
              <option> Todas las marcas </option>
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

            <select onChange={(e) => setModelo(e.target.value)}>
              <option>Todos los modelos</option>
              <option value={"corsa"}>Corsa</option>
              <option value={"cruze"}>Cruze</option>
              <option value={"s10"}>S10</option>
              <option value={"tracker"}>Tracker</option>
            </select>

            <select>
            <option value={""}>Kilometraje</option>
              <option value={20000}>Menor a 20000km</option>
              <option value={50000}>Menor a 50000km</option>
              <option value={80000}>Menor a 80000km</option>
              <option value={100000}>Menor a 100000km</option>
            </select>


            <span>Desde:
            <input type="number" placeholder="$" className="rango-precios" value={precioMin} onChange={(e) => setPrecioMin(e.target.value)}></input></span>
            <span>Hasta:
            <input type="number" placeholder="$" className="rango-precios" value={precioMax} onChange={(e) => setPrecioMax(e.target.value)}></input></span>
          </div>

          <input className="form-search-btn" type="submit" value="BUSCAR"></input>

        </form>
      </div>
      {marca + modelo}
    </>
  )
}

export default FullSearch