import { useContext, useEffect, useState } from 'react';
import SearchContext from '../context/SearchContext';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../firebase/config";
import Footer from './Footer';
import Loader from './Loader';

const Car = () => {
    const { id } = useParams();

    const [auto, setAuto] = useState(false);
    const [index, setIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        search()
    }, [])

    const search = async () => {
        try {
            const queryDoc = doc(db, "vehicles", id);

            const autoID = await getDoc(queryDoc);

            if (autoID.data()) {
                setAuto(autoID.data());
            }else {
                window.location.href = "/not-found";
            }

          } catch (error) {
            console.error(error);
        }
    }
    
    const { setClick } = useContext(SearchContext);

    const {marca, motor, combustible, year, precio, transmision, km, modelo, imagenes, color, descripcion} = auto;

    useEffect(() => {
        window.addEventListener('popstate', () => {
            setClick(true)
        });
        //es para que mantenga el estado al volver hacia atras

    }, []);

  return (
    auto ?
    <>
    <div className='car-container'>
        <div className='car-carousel'>

            <div className="carousel-buttons-container">

                <button className='disminuir-index' type="button"
                onClick={()=>{
                    if(index === 0){
                    setIndex(imagenes.length-1)
                    }else {
                    setIndex(index-1)
                    }
                }}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-331.999 226.434-585.565 283-642.131l197 198 197-197 56.566 56.566L480-331.999Z"/></svg>
                </button>


                <button className='aumentar-index' type="button"
                onClick={()=>{
                    if(index === imagenes.length-1){
                        setIndex(0)
                    }else {
                        setIndex(index+1)
                    }
                }}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-331.999 226.434-585.565 283-642.131l197 198 197-197 56.566 56.566L480-331.999Z"/></svg>
                </button>
            </div>

            <img className={"carousel-img scale-up"} src={imagenes[index]} alt="" style={{width: "394px", height: "295px"}} key={index}/>
        </div>

        <div className='car-info-container'>
            <h2>{`${marca} ${modelo}`}</h2>
            <h4>{`${motor}`}</h4>
            <span>{`${year} / ${combustible} / ${transmision} / ${km}Km`}</span>
            <h5>{`$${precio}`}</h5>

            <div >
                <button 
                    onClick={() => setShowDetails(!showDetails)}className='accordion-button'>
                    <p>Ficha Técnica</p>

                    <svg style={showDetails? {rotate: "180deg", transition: "0.5s"} : {rotate: "0deg", transition: "0.5s"}} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-331.999 226.434-585.565 283-642.131l197 198 197-197 56.566 56.566L480-331.999Z"/></svg>
                </button>

                {
                showDetails ?

                    <div className='technical-info'>
                        <div>
                            <span>Marca:</span>
                            <p>{marca}</p>
                        </div>               
                        <div>
                            <span>Modelo:</span>
                            <p>{modelo}</p>
                        </div>               
                        <div>
                            <span>Motor:</span>
                            <p>{motor}</p>
                        </div>               
                        <div>
                            <span>Combustible:</span>
                            <p>{combustible}</p>
                        </div>               
                        <div>
                            <span>Kilometraje:</span>
                            <p>{km} km</p>
                        </div>               
                        <div>
                            <span>Año:</span>
                            <p>{year}</p>
                        </div>               
                        <div>
                            <span>Transmisión:</span>
                            <p>{transmision}</p>
                        </div>               
                        <div>
                            <span>Color:</span>
                            <p>{color}</p>
                        </div>               
    
                    </div>

                : <></>
                }

            </div>

            <div className='description-container'>
                <h6 className='description-title'>Descripción</h6>
                <p style={{ whiteSpace: 'pre-line' }}>{descripcion}</p>
            </div>

            <button onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5492342465676&text=Hola%2C+me+gustar%C3%ADa+que+me+pases+info+de"} className='consultar-button'>
                    CONSULTAR
             <svg xmlns="http://www.w3.org/2000/svg" x="0px"      y="0px" width="30" height="30" viewBox="0 0 24 24">
                    <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                </svg>
            </button>
        </div>
        
    </div>

    <Footer></Footer>
    </>
    : <div style={{width:"100vw", height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Loader></Loader>
    </div>
  )
}

export default Car