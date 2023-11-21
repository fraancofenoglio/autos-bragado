
const Sucursales = () => {
  return (
    <div className="sucursales">

    <h2>Nuestras Sucursales</h2>

    <div className="sucursal-card">

      <img src="./assets/agencia-autos.jpg" alt="sucursal"/>

      <h3>Bragado, Buenos Aires</h3>

      <p>Rivadavia 1801, Bragado</p>

      <button onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5492342465676&text=Hola%2C+me+gustar%C3%ADa+que+me+pases+info+de"} type="button">Contactanos</button>
    </div>

  </div>
  )
}

export default Sucursales