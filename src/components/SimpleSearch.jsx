import { useContext } from "react";
import SearchContext from "../context/SearchContext";

const SimpleSearch = () => {

  const {setResultados, setAutosInput, autosDB, autosInput} = useContext(SearchContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(autosInput){
      setResultados(
        autosDB.filter((auto) => {
          if(auto.marca.toLowerCase() === autosInput.toLowerCase()) {
            return auto.marca
          } else if ( auto.modelo.toLowerCase() === autosInput.toLowerCase()){
            return auto.modelo
          } else return null
        })
      )

      if (window.location.pathname === "/" && window.innerWidth > 800) {
        
        window.scroll({top: 1500, left: 0, behavior: "smooth"})
      } else if (window.location.pathname === "/" && window.innerWidth < 800){
        window.scroll({top: 1400, left: 0, behavior: "smooth"})
      } else if (window.innerWidth < 800) {
        window.scroll({top: 800, left: 0, behavior: "smooth"})
      }
    }

    setAutosInput("")

  }

  return (
    <section className="search-section">

        <form className="search-form" onSubmit={handleSubmit}>
        <input type="search" placeholder="Buscar por Marca o Modelo" value={autosInput} onChange={(e) => {
          setAutosInput(e.target.value)
        }}>
            
        </input>
        <button type="submit">

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" ><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
        </button>
        </form>

    </section>
  )
}

export default SimpleSearch