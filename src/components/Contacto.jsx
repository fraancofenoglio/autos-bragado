
const Contacto = () => {
  return (
    <section className="contacto">
        <h3>Consultanos</h3>

        <div id="contacto" className="form-container-footer">
        <form>
            <input type="text" placeholder="Nombre" required/>

            <input type="email" placeholder="Email"required/>

            <input type="tel" placeholder="Teléfono"required/>

            <textarea rows="4" cols="40" placeholder="Consulta" required></textarea>

            <input type="submit" value="ENVIAR" className="form-footer-button"/>
        </form>
        </div>
    </section>
  )
}

export default Contacto