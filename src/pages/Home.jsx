import Footer from "../components/Footer";
import FullSearch from "../components/FullSearch";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Offer from "../components/Offer";
import SimpleSearch from "../components/SimpleSearch";
import Sucursales from "../components/Sucursales";

const Home = () => {
  return (
    <>
        <Header/>
        <SimpleSearch/>
        <Intro/>
        <Offer/>
        <FullSearch/>

        <div></div>

        <Sucursales/>
        <Footer/>
    
    </>
  )
}

export default Home