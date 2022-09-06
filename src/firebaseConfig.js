import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "VITE_FIREBASE_API_KEY",
    authDomain: "VITE_FIREBASE_AUTH_DOMAIN",
    databaseURL: "VITE_FIREBASE_DATABASE_URL",
    projectId: "VITE_FIREBASE_PROJECT_ID",
    storageBucket: "VITE_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "VITE_FIREBASE_APP_ID",
    appId: "VITE_FIREBASE_MEASUREMENT_ID"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }
