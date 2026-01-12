// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"  
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUil85EoVwNhI8z8Htz7DYNK7MwKNDux8",
  authDomain: "scholarsync-d24c0.firebaseapp.com",
  projectId: "scholarsync-d24c0",
  storageBucket: "scholarsync-d24c0.firebasestorage.app",
  messagingSenderId: "714499467724",
  appId: "1:714499467724:web:9d1622a690f9a240dd5569",
  measurementId: "G-NFHJZ8N115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app
