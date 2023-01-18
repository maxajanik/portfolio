// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3EWqi_m8dR4O8wVsveTCI3g_NGoL45dc",
  authDomain: "portfolio-95ef8.firebaseapp.com",
  projectId: "portfolio-95ef8",
  storageBucket: "portfolio-95ef8.appspot.com",
  messagingSenderId: "273405994849",
  appId: "1:273405994849:web:d85a3197921c9de3268720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)