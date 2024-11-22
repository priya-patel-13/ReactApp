import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD7lT4HWK16XdLhgNDf4iaSwb7PM8rMsZ8",
  authDomain: "auth2-5a5f9.firebaseapp.com",
  projectId: "auth2-5a5f9",
  storageBucket: "auth2-5a5f9.firebasestorage.app",
  messagingSenderId: "178112995070",
  appId: "1:178112995070:web:22968e9936633daa67cfaf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider(app)
export {auth , provider , db}