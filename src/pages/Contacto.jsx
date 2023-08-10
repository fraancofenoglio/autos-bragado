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
                <a href="https://www.instagram.com" target='_blank' rel='noreferrer'><span>Instagram:</span> AutosBragado</a>

                <a href="https://www.facebook.com" target='_blank' rel='noreferrer'><span>Facebook: </span> Autos Bragado</a>

                <a href="mailto:autosbragado@autos.com" target='_blank' rel='noreferrer'><span>Email: </span> autosbragado@autos.com</a>
            </div>
        </div>
        <Contact/>
        <Footer></Footer>
    </>
  )
}

export default Contacto