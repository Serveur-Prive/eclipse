// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// Pour une application réelle, ces valeurs devraient être dans des variables d'environnement
const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyForDofusStasisProject",
  authDomain: "dofus-stasis.firebaseapp.com",
  projectId: "dofus-stasis",
  storageBucket: "dofus-stasis.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

export default app
