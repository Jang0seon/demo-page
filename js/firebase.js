import firebase from 'firebase/compat/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDfYJRdcK97ZuqglKaVTR1eN8b-8Jdv1q4",
    authDomain: "tokyo-micron-463601-p8.firebaseapp.com",
    projectId: "tokyo-micron-463601-p8",
    storageBucket: "tokyo-micron-463601-p8.firebasestorage.app",
    messagingSenderId: "240808159243",
    appId: "1:240808159243:web:df3412577264a620a6ff0e",
    measurementId: "G-YLG46GVZN8"
};

export default firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore()
const likeRef = db.collection("likes").doc("main");

export function updateLikeCount() {
likeRef.get().then(doc => {
    if (doc.exists) {
    document.getElementById("like-count").textContent = doc.data().count;
    } else {
    likeRef.set({ count: 0 });
    }
});
}

export function like() {
    likeRef.update({ count: firebase.firestore.FieldValue.increment(1) });
    updateLikeCount();
}

export function like01() {
    console.log('like01');
}

updateLikeCount(); // 초기 좋아요 수 가져오기
