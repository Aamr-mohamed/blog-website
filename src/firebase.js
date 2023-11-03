// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "bloggingway-5722e.firebaseapp.com",
  projectId: "bloggingway-5722e",
  storageBucket: "bloggingway-5722e.appspot.com",
  messagingSenderId: "469820937164",
  appId: "1:469820937164:web:74e0641c8c5733b9a30369",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
