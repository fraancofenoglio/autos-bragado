import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import FullSearch from "../components/FullSearch";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Offer from "../components/Offer";
import SimpleSearch from "../components/SimpleSearch";
import Sucursales from "../components/Sucursales";
import SearchContext from "../context/SearchContext";

const Home = () => {


  const {resultados, setResultados} = useContext(SearchContext);

  useEffect(() => {
    setResultados(null)
 
  }, [setResultados])
    
    
  return (
    <>
        <Header/>
        <SimpleSearch/>
        <Intro/>
        <Offer/>
        <FullSearch/>
        <section className="resultados-busqueda" style={{margin: "0 auto"}}>
            {
             resultados && resultados.length !== 0 ?
                <>
                {resultados.map((auto, i) => (
                    <div className="card" key={i}>
                        <img className="card-img" src={auto.imagenes[0]} alt="" />
                        <h4 className="card-title">{auto.marca + " " + auto.modelo}</h4>
                        <span>{auto.motor}</span>
                        <p className="card-info">{`${auto.year} / ${auto.combustible} / ${auto.transmision}`}</p>
                        <p className="card-km">{` ${auto.km} km`}</p>
                        <h4 className="card-precio">${auto.precio}</h4>
                        <button className="card-button">VER</button>
                    </div>
                    ))
                }
                </>
                : <></>
            }
        </section>
        <Sucursales/>
        <Footer/>
    
    </>
  )
}

export default Home