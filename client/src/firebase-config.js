// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLn17vBchmbZ3Yesp5xMjRA0JBxe3d7ZE",
  authDomain: "leepo-35d65.firebaseapp.com",
  projectId: "leepo-35d65",
  storageBucket: "leepo-35d65.appspot.com",
  messagingSenderId: "70584941101",
  appId: "1:70584941101:web:9832aa32a246bee06656a4",
  measurementId: "G-VK7DZDF3BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

