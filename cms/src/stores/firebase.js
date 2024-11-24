// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD099O3_X1xqL5ny7ahkHHhOopQCgYenBc",
  authDomain: "clinicmanagementsystem-4308c.firebaseapp.com",
  projectId: "clinicmanagementsystem-4308c",
  storageBucket: "clinicmanagementsystem-4308c.appspot.com",
  messagingSenderId: "137482611901",
  appId: "1:137482611901:web:ecf31475420038fc815bd4",
  measurementId: "G-0ETSPJY7P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }
