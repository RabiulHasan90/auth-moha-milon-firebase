// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAU1LrlIT46cJZrafNqFBjDkOCkCyu064",
  authDomain: "auth-moha-milon-9c0cc.firebaseapp.com",
  projectId: "auth-moha-milon-9c0cc",
  storageBucket: "auth-moha-milon-9c0cc.appspot.com",
  messagingSenderId: "488546315686",
  appId: "1:488546315686:web:2df9f8f6c9f60d32927367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;