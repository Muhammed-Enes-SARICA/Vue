import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvaXyB1R0ZrVQWOa41E3Nnzf4N_o2BkBc",
  authDomain: "vue-firestore-790ff.firebaseapp.com",
  projectId: "vue-firestore-790ff",
  storageBucket: "vue-firestore-790ff.appspot.com",
  messagingSenderId: "998282650324",
  appId: "1:998282650324:web:02e564fe15fb67e2ee1141"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default { db, auth };
