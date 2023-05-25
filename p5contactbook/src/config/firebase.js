// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq9UAJbRa6-GdpaO9EpSEtQS4PMdm2t6k",
  authDomain: "vite-contact-8c68a.firebaseapp.com",
  projectId: "vite-contact-8c68a",
  storageBucket: "vite-contact-8c68a.appspot.com",
  messagingSenderId: "191700179089",
  appId: "1:191700179089:web:eedfdb39317148fc3e0730",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
