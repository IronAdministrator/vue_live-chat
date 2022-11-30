import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzcS9OJvSbS2xJCm0sxJZxi--iln5Xl4Y",
  authDomain: "newfirebase-748fd.firebaseapp.com",
  projectId: "newfirebase-748fd",
  storageBucket: "newfirebase-748fd.appspot.com",
  messagingSenderId: "978396762568",
  appId: "1:978396762568:web:6ad0a6682735f2a1a1f0fd"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore
const projectFirestore = firebase.firestore()
// init firestore timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp
// init firebase Authentifikation 
const projectAuth = firebase.auth()

export {projectFirestore, timestamp, projectAuth}