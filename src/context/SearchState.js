import React, { useState } from "react";
import SearchContext from './SearchContext';
import {autos} from '../autos.js';


const SearchState = ({children}) => {

    const [minPrice, setMinPrice] = useState(200000);
    const [maxPrice, setMaxPrice] = useState(10000000);
    const [minYear, setMinYear] = useState(2000);
    const [maxYear, setMaxYear] = useState(2023);
    const [MARCA, setMARCA] = useState("");
    const [MODELO, setMODELO] = useState("");
    const [COMBUSTIBLE, setCOMBUSTIBLE] = useState("");
    const [KILOMETROS, setKILOMETROS] = useState(100000);
    const [autosInput, setAutosInput] = useState("");

    const [resultados, setResultados] = useState(autos);

    const marcasUnicas = Array.from(new Set(autos.map((auto) => auto.marca)));
    const modelosUnicos = Array.from(new Set(autos.filter(auto => auto.marca.toLowerCase() === MARCA).map(auto => auto.modelo)));


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
            marcasUnicas,
            modelosUnicos
        }}
    >
        {children}
    </SearchContext.Provider>
  )
}

export default SearchState
