
const Header = () => {
  return (
    <header className="header">

        <div className="slider">
          <ul>
              <li>
                  <img className="backgorund" src="../assets/header.jpg" alt="slider1"/>
              </li>
              <li>
                  <img className="background" src="../assets/header2.jpg" alt="slider2"/>
              </li>
          </ul>
        </div>
      
        <div className="title">
            <h1>
                Comprá hoy tu próximo auto.
            </h1>
            <button>
                Ver autos
            </button>
        </div>

  </header>
  )
}

export default Header