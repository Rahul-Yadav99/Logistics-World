// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBK-Xxuze8pOFX7NoujqsJF-UgwO_x5tII",
  authDomain: "transportation-187e5.firebaseapp.com",
  projectId: "transportation-187e5",
  storageBucket: "transportation-187e5.appspot.com",
  messagingSenderId: "444296947977",
  appId: "1:444296947977:web:812001a350eaa1b3c24bd8",
  measurementId: "G-HJDE0TLTV4"
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig