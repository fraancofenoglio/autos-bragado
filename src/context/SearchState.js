import React, { useState } from "react";
import SearchContext from './SearchContext';
import {autos} from '../autos.js';
import { useEffect } from "react";
import useFirebase from "../firebase/utils";


const SearchState = ({children}) => {

  const [minPrice, setMinPrice] = useState(200000);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [minYear, setMinYear] = useState(2000);
  const [maxYear, setMaxYear] = useState(2023);
  const [MARCA, setMARCA] = useState(false);
  const [MODELO, setMODELO] = useState(false);
  const [COMBUSTIBLE, setCOMBUSTIBLE] = useState(false);
  const [KILOMETROS, setKILOMETROS] = useState(100000);
  const [autosInput, setAutosInput] = useState("");

  const [autosDB, setAutos] = useState()
  const [resultados, setResultados] = useState(autosDB? autosDB : autos);

  const [autosLS, setAutosLS] = useState()

  const marcasUnicas = Array.from(new Set(autosDB?.map((auto) => auto.marca.toLowerCase())));
  const modelosUnicos = Array.from(new Set(autosDB?.filter(auto => auto.marca.toLowerCase() === MARCA).map(auto => auto.modelo.toLowerCase())));

  const [user, setUser] = useState()
  const {getData, data} = useFirebase();

  const [click, setClick] = useState(false)



  useEffect( () => {
    getData()
  },[])

  useEffect(() => {
    setAutos(data)
    console.log(data)
    window.localStorage.setItem("data",JSON.stringify(data));

    setTimeout(() => {
      const ls = window.localStorage.getItem("data")  
      setAutosLS(JSON.parse(ls))
    }, 2000);

  },[data, autosDB])

  return (
    <SearchContext.Provider
        value={{
            minPrice,
            setMinPrice,
            maxPrice,
            setMaxPrice,
            minYear,
            setMinYear,
            maxYear,
            setMaxYear,
            MARCA,
            setMARCA,
            MODELO,
            setMODELO,
            COMBUSTIBLE,
            setCOMBUSTIBLE,
            KILOMETROS,
            setKILOMETROS,
            autosInput,
            setAutosInput,
            resultados,
            setResultados,
            autos,
            autosDB,
            autosLS,
            marcasUnicas,
            modelosUnicos,
            user,
            setUser,
            click,
            setClick
        }}
    >
        {children}
    </SearchContext.Provider>
  )
}

export default SearchState
