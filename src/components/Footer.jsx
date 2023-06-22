
const Footer = () => {
  return (
    <footer>

        <div className="footer-links">
        <a href="/">Inicio</a>
        <a href="/">Busca tu auto</a>
        <a href="/">Vende tu auto</a>
        <a href="/">Contacto</a>
        </div>

        <h3>Consultanos</h3>

        <div className="form-container-footer">
        <form>
            <input type="text" placeholder="Nombre"/>

            <input type="email" placeholder="Email"/>

            <input type="number" placeholder="Teléfono"/>

            <textarea rows="7" cols="40" placeholder="Consulta"></textarea>

            <input type="submit" value="ENVIAR" className="form-footer-button"/>
        </form>
        </div>

  </footer>
  )
}

export default Footer