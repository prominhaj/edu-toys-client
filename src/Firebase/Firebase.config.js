// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgd9_1pg6pQsqMuhOQW_whUxcH0pqyK8E",
  authDomain: "edu-toys-client.firebaseapp.com",
  projectId: "edu-toys-client",
  storageBucket: "edu-toys-client.appspot.com",
  messagingSenderId: "18526020775",
  appId: "1:18526020775:web:1318c4a1fd8a363b75a782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;