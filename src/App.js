import FullSearch from "./components/FullSearch";
import Header from "./components/Header";
import Intro from "./components/Intro";
import NavMobile from "./components/NavMobile";
import Offer from "./components/Offer";
import SimpleSearch from "./components/SimpleSearch";

function App() {

  return (
    <>
      <NavMobile/>
      <Header/>
      <SimpleSearch/>
      <Intro/>
      <Offer/>
      <FullSearch></FullSearch>

      <div></div>

      <div className="sucursales">

        <h2>Nuestras Sucursales</h2>

        <div className="sucursal-card">

          <img src="./assets/agencia-autos.jpg" alt="sucursal"/>

          <h3>Bragado, Buenos Aires</h3>

          <p>Rivadavia 1801, Bragado</p>

          <button type="button">Contactanos</button>
        </div>

      </div>



    
    </>
  );
}

export default App;
