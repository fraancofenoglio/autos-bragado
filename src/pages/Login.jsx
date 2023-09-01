import { useContext, useState } from "react";
import SearchContext from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { useEffect } from "react";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const {setUser} = useContext(SearchContext);
    const navigate = useNavigate();
    
    
    useEffect(() => {
        
        const userstorage = localStorage.getItem("user")
    
        if (userstorage) {
            setUser(JSON.parse(userstorage))
            navigate("/admin")
        }
    })
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            setUser(result)
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/admin");
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                setMessage("Usuario no encontrado.")
            }else if (error.code === "auth/wrong-password"){
                setMessage("Contraseña incorrecta.")
            }
        } finally {
            setLoading(false)
            setTimeout(() => {
                setMessage("")
            }, 5000);
            clearTimeout()
        }
    }

  return (
    <div className="login-container">
        <h4>Iniciar sesión como administrador</h4>
        <form className="login-form" onSubmit={handleSubmit} >
            <span>Email</span>
            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <span>Contraseña</span>
            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>

            {message? <span className="login-error">{message}</span> : <></>}

            <button className="login-btn" type="submit" >{loading ? <Loader/> : "INGRESAR"}</button>
        </form>
    </div>
  )
}

export default Login