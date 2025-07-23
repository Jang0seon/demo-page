// import { initializeApp } from "firebase/app";
// import { } from "firebase/auth"
// import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import { getFirestore, collection, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDfYJRdcK97ZuqglKaVTR1eN8b-8Jdv1q4",
  authDomain: "tokyo-micron-463601-p8.firebaseapp.com",
  databaseURL: "https://tokyo-micron-463601-p8-default-rtdb.firebaseio.com",
  projectId: "tokyo-micron-463601-p8",
  storageBucket: "tokyo-micron-463601-p8.firebasestorage.app",
  messagingSenderId: "240808159243",
  appId: "1:240808159243:web:df3412577264a620a6ff0e",
  measurementId: "G-YLG46GVZN8"
});
const db = getFirestore(firebaseApp);
// db.collection('likes').getDocs();
const querySnapshot = await getDocs(collection(db, "likes"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});


