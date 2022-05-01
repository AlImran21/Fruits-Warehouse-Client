// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6e2MFwgW4O0JSClbvkVv-rUiJiELml2M",
  authDomain: "my-assignment-11-with-node.firebaseapp.com",
  projectId: "my-assignment-11-with-node",
  storageBucket: "my-assignment-11-with-node.appspot.com",
  messagingSenderId: "1744688921",
  appId: "1:1744688921:web:10128178f3c84cf8365788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;