import { collection, getDocs, query} from "firebase/firestore/lite";
import { db } from "../firebase/config";
import { useState } from "react";


const useFirebase = () => {

    const [data, setData] = useState()


    const getData = async () => {
        console.log("firebase buscando...")
        try {
            const dataRef = collection(db, "vehicles");
            const q = query(dataRef);
    
            const dataDB =  await getDocs(q)
            setData(dataDB.docs.map((doc) => doc.data()))
        } catch (error) {
            console.log(error)
        }

    }
  return {
    getData, data, setData
  }
    
  
}

export default useFirebase