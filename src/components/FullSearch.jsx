
const FullSearch = () => {
  return (
    <div className="buscador-completo">

        <form className="buscador-formulario">
          <div className="buscador-icons">

            <img src="./assets/car-icon.png" alt="icono auto"/>
            <img src="./assets/SUV-icon.png" alt="icono SUV"/>
            <img src="./assets/pickup-icon.png" alt="icono pickup"/>


          </div>

          <select>
            <option> Todas las marcas </option>
            <option>VOLKSWAGEN</option>
            <option>FORD</option>
            <option>CHEVROLET</option>
            <option>FIAT</option>
            <option>RENAULT</option>
            <option>TOYOTA</option>
            <option>CITROEN</option>
            <option>PEUGEOT</option>
            <option>HONDA</option>
            <option>NISSAN</option>
            <option>AUDI</option>
            <option>BMW</option>
          </select>

          <select>
            <option>Todos los modelos</option>
            <option>Corsa</option>
            <option>Cruze</option>
            <option>S10</option>
            <option>Tracker</option>
          </select>

          <hr></hr>

          <span>Desde:</span>
          <input type="number" placeholder="$" className="rango-precios"></input>
          <span>Hasta:</span>
          <input type="number" placeholder="$" className="rango-precios"></input>

          <input className="form-search-btn" type="submit" value="BUSCAR"></input>

        </form>
      </div>
  )
}

export default FullSearch