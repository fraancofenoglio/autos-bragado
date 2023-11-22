import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"

const NotFound = () => {

    const navigate = useNavigate()
  return (
    <div className='not-found-container'>

        <div className='not-found'>

            <h6>Página no encontrada &#128549;</h6>

            <button onClick={() => navigate("/")} className='go-back'>Volver al inicio</button>

        </div>

    </div>
  )
}

export default NotFound