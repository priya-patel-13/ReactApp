// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLSJag_xbNMlRq_U2VDXToBhLE4bOUo4E",
  authDomain: "firebash3.firebaseapp.com",
  projectId: "firebash3",
  storageBucket: "firebash3.firebasestorage.app",
  messagingSenderId: "287817787737",
  appId: "1:287817787737:web:5fb462dc2067f0d0530448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export {auth , db}