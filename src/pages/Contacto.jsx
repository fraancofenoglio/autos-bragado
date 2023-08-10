import Footer from '../components/Footer';
import Contact from '../components/Contact'

const Contacto = () => {
  return (
    <>
        <div className='contacto-header'>
            <img src="./assets/contacto.jpg" alt="mujer con smartphone en la mano" />

            <div className='contacto-texto'>
                <h4>Contactenos</h4>
            </div>
        </div>

        <div className='redes'>
            <h4>Nuestra redes sociales:</h4>
            <div className='redes-container'>
                <a href="www.instagram.com"><span>Instagram:</span> AutosBragado</a>
                <a href="www.facebook.com"><span>Facebook: </span> Autos Bragado</a>
                <a href="mailto:autosbragado@autos.com"><span>Email: </span> autosbragado@autos.com</a>
            </div>
        </div>
        <Contact/>
        <Footer></Footer>
    </>
  )
}

export default Contacto