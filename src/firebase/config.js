import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfiZ2w1747zwZAnDdcReZrpdx1BnbGLeo",
  authDomain: "react-curso-76055.firebaseapp.com",
  projectId: "react-curso-76055",
  storageBucket: "react-curso-76055.appspot.com",
  messagingSenderId: "40356144715",
  appId: "1:40356144715:web:e95b19c56ce40243fd8fce"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FirebaseApp )
export const FireBaseDB = getFirestore( FirebaseApp )
