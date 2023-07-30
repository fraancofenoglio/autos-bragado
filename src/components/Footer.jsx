import { HashLink } from "react-router-hash-link"

const Footer = () => {
  return (
    <footer>

        <div className="footer-links">
          <HashLink smooth to="#">
            Inicio
          </HashLink>

          <HashLink smooth to="#oferta">
            Busca tu auto
          </HashLink>

          <HashLink smooth to="/venta">
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