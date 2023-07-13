
const Contacto = () => {
  return (
    <>
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
    </>
  )
}

export default Contacto