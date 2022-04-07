// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFireStore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjNH36d_nZ_9ZQr1wIhOpcwATXR410hZM",
  authDomain: "instagram-2-1f2ba.firebaseapp.com",
  projectId: "instagram-2-1f2ba",
  storageBucket: "instagram-2-1f2ba.appspot.com",
  messagingSenderId: "258754012816",
  appId: "1:258754012816:web:e2ff2c28809f7677b39a15"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();


export {app, db, storage};