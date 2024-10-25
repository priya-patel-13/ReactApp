// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtXzoJkPejPHbc3DWQH4OC9mrSvk38PfY",
  authDomain: "react1-2421e.firebaseapp.com",
  projectId: "react1-2421e",
  storageBucket: "react1-2421e.appspot.com",
  messagingSenderId: "875645581838",
  appId: "1:875645581838:web:361dc66d666fd47cb99a5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}