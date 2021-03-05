import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDhIOALxoyqPitiwvDTrDvyGmi4IziIHvU",
    authDomain: "ruang-kuliah.firebaseapp.com",
    projectId: "ruang-kuliah",
    storageBucket: "ruang-kuliah.appspot.com",
    messagingSenderId: "757633275128",
    appId: "1:757633275128:web:e4fce86baba03a39ac170d"
}

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

export default firebase
export const DB = firebase.firestore()
export const AUTH = firebase.auth()
export const STORAGE = firebase.storage()
export const GoogleAUTH = new firebase.auth.GoogleAuthProvider()