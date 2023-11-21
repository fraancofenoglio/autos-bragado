import { useState} from 'react'
import Footer from '../components/Footer'

const Venta = () => {

    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [km, setKm] = useState();
    const [year, setYear] = useState();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `https://api.whatsapp.com/send/?phone=5492342465676&text=Hola%2C%20mi%20nombre%20es%20${nombre}%20y%20tengo%20un%20${marca}%20${modelo}%20${year}%20con%20${km}%20km%2C%20mi%20email%20es%20${email}`;
        
        setMarca("");
        setModelo("");
        setKm("");
        setYear("");
        setNombre("");
        setEmail("");
    }

  return (
    <>
        <div className='venta-container'>
            <div className='header-venta'>
                <img src={window.innerWidth > 900 ? "../assets/ford2.jpg" : "../assets/ford.jpg"} alt="mercedes benz" />
                <div className='venta-texto'>
                    <h3>Comentanos sobre el vehículo que querés entregar como parte de pago.</h3>
                </div>
            </div>
            <p className='venta-p'>
                Completa el formulario de abajo con los datos de tu auto, tu nombre y tu email. Cuando hagas click en "Cotizar" te llevará a nuestro chat de WhatsApp para organizar un encuentro para cotizar tu auto.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-331.999 226.434-585.565 283-642.131l197 198 197-197 56.566 56.566L480-331.999Z"/></svg>

            <form className='venta-form' onSubmit={handleSubmit}>
                <div className='container-inputs-venta'>
                    <input type="text" name="from_marca" placeholder='Marca de tu auto' value={marca} onChange={(e) => setMarca(e.target.value)} required/>

                    <input type="text" name="from_modelo" placeholder='Modelo de tu auto' value={modelo} onChange={(e) => setModelo(e.target.value)} required/>

                    <input type="tel" name="from_km" placeholder='Km aprox. de tu auto' value={km} onChange={(e) => setKm(e.target.value)} required/>

                    <input type="tel" name="from_year" placeholder='Año de tu auto' value={year} onChange={(e) => setYear(e.target.value)} required/>

                    <input type="text" name="from_name" placeholder='Tu nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} required/>

                    <input type="email" name="from_email" placeholder='Tu email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <input type="submit" value="Cotizar" id='venta-btn'/>
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default Venta