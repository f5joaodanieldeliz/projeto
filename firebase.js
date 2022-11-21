import { initializeApp } from 'firebase/app';
//import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBUcoW4_ZCktKbpS6rMZDJal2FKsDLbzvw",
  authDomain: "projeto-206ed.firebaseapp.com",
  databaseURL: "https://projeto-206ed-default-rtdb.firebaseio.com",
  projectId: "projeto-206ed",
  storageBucket: "projeto-206ed.appspot.com",
  messagingSenderId: "913900636423",
  appId: "1:913900636423:web:14b0a2d099a355480edda2",
  measurementId: "G-4HXL6RZ7EZ"
};

let myApp = initializeApp(firebaseConfig);
//export const auth = getAuth(app);