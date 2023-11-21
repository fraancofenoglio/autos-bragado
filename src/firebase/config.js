import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA08kmXzX-OCMPmoHI1dIGzY2eZZRMBR6g",
  authDomain: "agencia-autos-344ac.firebaseapp.com",
  projectId: "agencia-autos-344ac",
  storageBucket: "agencia-autos-344ac.appspot.com",
  messagingSenderId: "19450621701",
  appId: "1:19450621701:web:74d9a64e8ff6ac76bcd16c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.useDeviceLanguage();
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, db, storage };


