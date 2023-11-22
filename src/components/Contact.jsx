import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  
  const signal = (message) => toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && number && message) {
      emailjs.sendForm("service_b2myntb", "template_ssj27gq", form.current, "7NqG_0L9oXGAZ--p5");
      
    }
    signal("¡Consulta enviada!");
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  }

  return (
    <section className="contacto">
        <h3>Consultanos</h3>

        <div id="contacto" className="form-container-footer">
          <form ref={form} onSubmit={handleSubmit}>
              <input type="text" placeholder="Nombre" name="from_name" required value={name} onChange={(e) => setName(e.target.value)}/>

              <input type="email" placeholder="Email" name="from_email" required value={email} onChange={(e) => setEmail(e.target.value)}/>

              <input type="tel" placeholder="Teléfono" name="from_number" required value={number} onChange={(e) => setNumber(e.target.value)}/>

              <textarea rows="4" cols="40" placeholder="Consulta" name="message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

              <input type="submit" value="ENVIAR" className="form-footer-button"/>
          </form>
        </div>

        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </section>
  )
}

export default Contact