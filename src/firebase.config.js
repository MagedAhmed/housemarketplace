import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtsPqIZaCl7i0Bl7VAty82OG18txdwKjE",
  authDomain: "house-marketplace-maged.firebaseapp.com",
  projectId: "house-marketplace-maged",
  storageBucket: "house-marketplace-maged.firebasestorage.app",
  messagingSenderId: "725367102533",
  appId: "1:725367102533:web:6ba0a5988940435915d72c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();