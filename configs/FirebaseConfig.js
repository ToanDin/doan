// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZrXW3Vsb-2kAuXfBswbETdgbsvG0pD_w",
  authDomain: "do-an-5f476.firebaseapp.com",
  projectId: "do-an-5f476",
  storageBucket: "do-an-5f476.appspot.com",
  messagingSenderId: "45438661699",
  appId: "1:45438661699:web:2dc8ea10f488d110a6d0f6",
  measurementId: "G-TDZVWWYFFF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)