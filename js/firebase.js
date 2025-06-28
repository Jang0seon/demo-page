// firebase-init.js (혹은 firebaseService.js 등으로 파일명 지어도 좋아요)
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDfYJRdcK97ZuqglKaVTR1eN8b-8Jdv1q4",
    authDomain: "tokyo-micron-463601-p8.firebaseapp.com",
    projectId: "tokyo-micron-463601-p8",
    storageBucket: "tokyo-micron-463601-p8.firebasestorage.app",
    messagingSenderId: "240808159243",
    appId: "1:240808159243:web:df3412577264a620a6ff0e",
    measurementId: "G-YLG46GVZN8"
};

// ✅ Firebase 앱은 한 번만 초기화해야 합니다
const app = firebase.apps.length === 0
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// 📊 Analytics (선택 사항)
const analytics = firebase.analytics();

// 🔥 Firestore
const db = firebase.firestore();
const likeRef = db.collection("likes").doc("main");

// ✅ 좋아요 수 가져오기
export function updateLikeCount() {
  likeRef.get().then(doc => {
    if (doc.exists) {
      document.getElementById("like-count").textContent = doc.data().count;
    } else {
      likeRef.set({ count: 0 });
    }
  });
}

// 👍 좋아요 추가
export function like() {
  likeRef.update({
    count: firebase.firestore.FieldValue.increment(1),
  });
  updateLikeCount();
}

// 테스트용 함수
export function like01() {
  console.log('like01');
}

// 초기 실행
updateLikeCount();

