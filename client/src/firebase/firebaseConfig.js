// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKwNpKj3dYaj0K6frfHoWD-U22FUiiEsw",
  authDomain: "fir-login-with-f9465.firebaseapp.com",
  projectId: "fir-login-with-f9465",
  storageBucket: "fir-login-with-f9465.appspot.com",
  messagingSenderId: "511456238352",
  appId: "1:511456238352:web:ca0d80b8bcd4806ecfe395",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
