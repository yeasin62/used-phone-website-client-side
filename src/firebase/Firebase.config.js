// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0wBDUJbYIEbdMZUV7RT_S4l0ePb10DiI",
  authDomain: "used-product-shop.firebaseapp.com",
  projectId: "used-product-shop",
  storageBucket: "used-product-shop.appspot.com",
  messagingSenderId: "385174191991",
  appId: "1:385174191991:web:f698233188d8d5deeb2b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;