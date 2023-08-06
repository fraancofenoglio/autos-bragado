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
        <Contact/>
        <Footer></Footer>
    </>
  )
}

export default Contacto