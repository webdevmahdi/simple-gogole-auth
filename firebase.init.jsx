// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1d-cQySKoE1HbOcimRTY8j9q_V4v015w",
  authDomain: "simple-gogole-auth.firebaseapp.com",
  projectId: "simple-gogole-auth",
  storageBucket: "simple-gogole-auth.appspot.com",
  messagingSenderId: "887322173119",
  appId: "1:887322173119:web:de4ba2917f6e989734700a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;