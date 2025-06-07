import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Enter your own Firebase configuration here 😏
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;