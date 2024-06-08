import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2eF1rmVnzxnRHdrndtVHsU-SURWXG6pc",
  authDomain: "phasmostore.firebaseapp.com",
  projectId: "phasmostore",
  storageBucket: "phasmostore.appspot.com",
  messagingSenderId: "82122202455",
  appId: "1:82122202455:web:c08cb24a0c26b0a0a3f212",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
