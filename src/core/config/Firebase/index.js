import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
// Required for side-effects

// Main
const firebaseConfig = {
  apiKey: "AIzaSyDhIOALxoyqPitiwvDTrDvyGmi4IziIHvU",
  authDomain: "ruang-kuliah.firebaseapp.com",
  projectId: "ruang-kuliah",
  storageBucket: "ruang-kuliah.appspot.com",
  messagingSenderId: "757633275128",
  appId: "1:757633275128:web:e4fce86baba03a39ac170d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Auth
firebase.auth().useDeviceLanguage();
const auth = app.auth();
const EmailAuthProvider = firebase.auth.EmailAuthProvider;
var googleProvider = new firebase.auth.GoogleAuthProvider();
// Firestore
const db = firebase.firestore();
const FieldValue = firebase.firestore.FieldValue;
// Storage
const storage = app.storage();
// Functions
const functions = firebase.functions();
let API_URL;
if (window.location.hostname === "localhost") {
  // db.useEmulator("localhost", 8080);
  // functions.useEmulator('localhost', 5001)
  // auth.useEmulator('http://localhost:9099/')
  API_URL = "http://localhost:5001/langit-edu/asia-southeast2/api";
} else {
  API_URL = "https://asia-southeast2-langit-edu.cloudfunctions.net/api";
}

export {
  auth,
  EmailAuthProvider,
  db,
  googleProvider,
  FieldValue,
  storage,
  functions,
  API_URL,
};
export default app;
