// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq5cEgU7PUzEjnPy1eelwwgE9ERjcNIYQ",
  authDomain: "adminrouters.firebaseapp.com",
  projectId: "adminrouters",
  storageBucket: "adminrouters.appspot.com",
  messagingSenderId: "871792617240",
  appId: "1:871792617240:web:e3e4ecd66935d4fec6a06d",
  measurementId: "G-HESTE2WX1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance
const analytics = getAnalytics(app); // Optional, if you're using Analytics

export { db };