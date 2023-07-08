import { useState } from "react";
import Footer from "../components/Footer";
import FullSearch from "../components/FullSearch";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Offer from "../components/Offer";
import SimpleSearch from "../components/SimpleSearch";
import Sucursales from "../components/Sucursales";

const Home = () => {

    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [precioMin, setPrecioMin] = useState()
    const [precioMax, setPrecioMax] = useState()
    
  return (
    <>
        <Header/>
        <SimpleSearch/>
        <Intro/>
        <Offer/>
        <FullSearch state={{marca, modelo, precioMin, precioMax} } setState={{setMarca, setModelo, setPrecioMin, setPrecioMax}}/>
        <Sucursales/>
        <Footer/>
    
    </>
  )
}

export default Home