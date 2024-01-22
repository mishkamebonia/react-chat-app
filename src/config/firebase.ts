import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALeTWmmCO-WypNYiEvWgtzmCH8AIgSQPA",
  authDomain: "fir-chat-app-a2fa1.firebaseapp.com",
  projectId: "fir-chat-app-a2fa1",
  storageBucket: "fir-chat-app-a2fa1.appspot.com",
  messagingSenderId: "696157834623",
  appId: "1:696157834623:web:38e7254c2e43c595131e4a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);