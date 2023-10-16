// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIroDl8tofdggTGK_KhHG7g3oKqV0iAJk",
  authDomain: "assignment9-eb9a4.firebaseapp.com",
  projectId: "assignment9-eb9a4",
  storageBucket: "assignment9-eb9a4.appspot.com",
  messagingSenderId: "802635619975",
  appId: "1:802635619975:web:04b21c75d6e01356f72222"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const useAuth=getAuth(app)
