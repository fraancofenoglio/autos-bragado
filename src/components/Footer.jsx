import { HashLink } from "react-router-hash-link"

const Footer = () => {
  return (
    <footer>

        <div className="footer-links">
          <HashLink smooth to="#">
            Inicio
          </HashLink>

          <HashLink smooth to="#oferta">
            Buscá tu auto
          </HashLink>

          <HashLink smooth to="/venta">
            Vendé tu auto
          </HashLink>

          <HashLink smooth to="/contacto">
            Contáctenos
          </HashLink>
        </div>

  </footer>
  )
}

export default Footer