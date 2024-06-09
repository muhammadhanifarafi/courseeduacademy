// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5__O3kbI3PpFiLggDcZGbiLuT6EWqoyg",
  authDomain: "test-project-865d7.firebaseapp.com",
  projectId: "test-project-865d7",
  storageBucket: "test-project-865d7.appspot.com",
  messagingSenderId: "9454575594",
  appId: "1:9454575594:web:a1402c0e56af7c964a1c93",
  measurementId: "G-C6HTY3KDSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
