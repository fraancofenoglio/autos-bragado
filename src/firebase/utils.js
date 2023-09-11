import { collection, getDocs, query, where} from "firebase/firestore/lite";
import { db } from "../firebase/config";
import { useState } from "react";


const useFirebase = () => {

    const [data, setData] = useState()


    const getData = async () => {

        try {
            const dataRef = collection(db, "vehicles");
            const q = query(dataRef);
    
            const dataDB =  await getDocs(q)
            // console.log(dataDB)
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