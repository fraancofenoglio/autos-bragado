import {useContext, useEffect} from 'react';
import SearchContext from '../context/SearchContext';
const ResultadosBusqueda = () => {

    const {resultados, setResultados} = useContext(SearchContext);

    
    useEffect(() => {
        if (window.location.pathname === "/") {
            
            setResultados(null)
        }
        
    }, [setResultados])
    console.log(resultados)
    
  return (
    <section className="resultados-busqueda">
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
                : <>

                {resultados === null ? <></> : <span className="no-results">No hay resultados que coincidan con su búsqueda.</span>}
                
                
                
                </>
            }

        </section>
  )
}

export default ResultadosBusqueda