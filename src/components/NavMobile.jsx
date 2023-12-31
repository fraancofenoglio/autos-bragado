import { useState, useContext } from "react";
import { HashLink } from 'react-router-hash-link';
import SearchContext from "../context/SearchContext";

const NavMobile = () => {

  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState("");
  const [widthChange, setWidthChange] = useState(window.innerWidth);
  const {setResultados, autosDB} = useContext(SearchContext);
  window.addEventListener("resize", ()=> {
    setWidthChange(window.innerWidth)
  })
  
  const handleClick = () => {
    setOpen(!open)
  
    if (open === false) {
      setAnimation("slide-in 0.4s ease-in-out both")
    } else {
      setAnimation("slide-out 0.1s cubic-bezier(0.755, 0.050, 0.855, 0.060) both")
    }
    setResultados(autosDB)
  }

  return (
    <nav>
        <div className="nav-container">
          <div className="logo">
            <a href="/">Autos Bragado</a>
          </div>
          {
            widthChange < 900 ? 

            <button className="menu-button" onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="38"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
            </button> 
            : <></>
          }
        </div>

        {
          widthChange < 900 ? 

          <div className="navegacion" style={{animation: animation, display: !open ? "none" : "flex"}}>

            <a href="/" onClick={handleClick}>Inicio</a>

            <HashLink smooth to="/compra" onClick={handleClick}>
              Buscá tu auto
            </HashLink>

            <HashLink smooth to="/venta" onClick={handleClick}>
              Vendé tu auto
            </HashLink>

            <HashLink smooth to="/contacto" onClick={handleClick}>
              Contáctenos
            </HashLink>

          </div> :

          <div className="nav-desktop">
            <a href="/" onClick={handleClick}>Inicio</a>

            <HashLink smooth to="/compra" onClick={handleClick}>
              Buscá tu auto
            </HashLink>

            <HashLink smooth to="/venta" onClick={handleClick}>
              Vendé tu auto
            </HashLink>

            <HashLink smooth to="/contacto" onClick={handleClick}>
              Contáctenos
            </HashLink>
          </div>
        }

      </nav>
  )
}

export default NavMobile