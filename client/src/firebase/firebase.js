import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAktPzdYFMpC4Q663CYmyIVIdNYk1-ifdI",
  authDomain: "admin-panel-d3bb1.firebaseapp.com",
  projectId: "admin-panel-d3bb1",
  storageBucket: "admin-panel-d3bb1.appspot.com",
  messagingSenderId: "246103330019",
  appId: "1:246103330019:web:cff456dfe3f25e18b709d6",
  measurementId: "G-TB8RL55KQ8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);

