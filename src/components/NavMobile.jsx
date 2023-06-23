import { useState } from "react"
import { HashLink } from 'react-router-hash-link'

const NavMobile = () => {

    const [open, setOpen] = useState(false)
    const [animation, setAnimation] = useState("")
  
    const handleClick = () => {
      setOpen(!open)
  
      if (open === false) {
        setAnimation("slide-in 0.4s ease-in-out both")
        console.log("false")
      } else {
        setAnimation("slide-out 0.1s cubic-bezier(0.755, 0.050, 0.855, 0.060) both")
        console.log("true")
      }
    }
  return (
    <nav>
        <div className="nav-container">
          <div className="logo">
            <a href="/">Autos Bragado</a>
          </div>

          <button className="menu-button" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="38"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
          </button>
        </div>


        <div className="navegacion" style={{animation: animation}}>

          <a href="/">Inicio</a>

          <HashLink smooth to="#oferta" onClick={() => setTimeout(() => handleClick(), 1000)}>
            Busca tu auto
          </HashLink>

          <HashLink smooth to="/vender" onClick={() => setTimeout(() => handleClick(), 1000)}>
            Vende tu auto
          </HashLink>

          <HashLink smooth to="#contacto" onClick={() => setTimeout(() => handleClick(), 1000)}>
            Contactenos
          </HashLink>


        </div>
      </nav>
  )
}

export default NavMobile