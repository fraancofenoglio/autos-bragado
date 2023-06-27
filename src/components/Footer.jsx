import { HashLink } from "react-router-hash-link"

const Footer = () => {
  return (
    <footer>



        <h3>Consultanos</h3>

        <div id="contacto" className="form-container-footer">
        <form>
            <input type="text" placeholder="Nombre"/>

            <input type="email" placeholder="Email"/>

            <input type="number" placeholder="Teléfono"/>

            <textarea rows="4" cols="40" placeholder="Consulta"></textarea>

            <input type="submit" value="ENVIAR" className="form-footer-button"/>
        </form>
        </div>

        <div className="footer-links">
          <HashLink smooth to="#">
            Inicio
          </HashLink>

          <HashLink smooth to="#oferta">
            Busca tu auto
          </HashLink>

          <HashLink smooth to="/vender">
            Vende tu auto
          </HashLink>

          <HashLink smooth to="#contacto">
            Contactenos
          </HashLink>
        </div>

  </footer>
  )
}

export default Footer