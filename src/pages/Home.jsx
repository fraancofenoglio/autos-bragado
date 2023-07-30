import Footer from "../components/Footer";
import Contacto from "../components/Contacto";
import FullSearch from "../components/FullSearch";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Offer from "../components/Offer";
import ResultadosBusqueda from "../components/ResultadosBusqueda";
import SimpleSearch from "../components/SimpleSearch";
import Sucursales from "../components/Sucursales";

const Home = () => {
    
  return (
    <>
        <Header/>
        <SimpleSearch/>
        <Intro/>
        <Offer/>
        <FullSearch/>
        <ResultadosBusqueda/>
        <Sucursales/>
        <Contacto/>
        <Footer/>
    
    </>
  )
}

export default Home