import { useContext, useEffect } from 'react';
import SearchContext from '../context/SearchContext';
import { useParams } from 'react-router-dom';

const Car = () => {

    const { id } = useParams();

    const {autosLS, click, setClick} = useContext(SearchContext);

    const auto = autosLS.filter(car => car.id === id)
    console.log(auto)

    const {marca, motor, combustible, año, precio, transmision, km, modelo, imagenes} = auto[0];

    console.log(click)
    useEffect(() => {
        window.addEventListener('popstate', ()=> {
            setClick(true)
        });
        //es para que mantenga el estado al volver hacia atras
      }, []);

  return (
    <div className='car-container'>
        <div className='car-carrousel'>
            carrousel 394x295
            <img src={imagenes[0]} alt="" style={{width: "394px", height: "295px"}} />
        </div>

        <h2>{`${marca} ${modelo}`}</h2>
        <h4>{`${motor}`}</h4>
        <span>{`${año} / ${combustible} / ${transmision} / ${km}Km`}</span>
        <h5>{`${precio}`}</h5>
        <div>
            <h6>
                Ficha Técnica
            </h6>
            <span></span>
            <p></p>
            <span></span>
            <p></p>
            <span></span>
            <p></p>
            <span></span>
            <p></p>
            <span></span>
            <p></p>
            <span></span>
            <p></p>
        </div>
    </div>
  )
}

export default Car