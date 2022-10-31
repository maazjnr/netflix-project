// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJMfIeLYklJTkSTBh2I9v1X4FqHLjXwxY",
  authDomain: "netflix-project-df268.firebaseapp.com",
  projectId: "netflix-project-df268",
  storageBucket: "netflix-project-df268.appspot.com",
  messagingSenderId: "734773375122",
  appId: "1:734773375122:web:f1d388e880e246b700f64b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = auth(app)

export {auth};