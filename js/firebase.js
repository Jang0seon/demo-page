// // firebase-init.js (혹은 firebaseService.js 등으로 파일명 지어도 좋아요)
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/analytics';

// const firebaseConfig = {
//   apiKey: "AIzaSyDfYJRdcK97ZuqglKaVTR1eN8b-8Jdv1q4",
//     authDomain: "tokyo-micron-463601-p8.firebaseapp.com",
//     projectId: "tokyo-micron-463601-p8",
//     storageBucket: "tokyo-micron-463601-p8.firebasestorage.app",
//     messagingSenderId: "240808159243",
//     appId: "1:240808159243:web:df3412577264a620a6ff0e",
//     measurementId: "G-YLG46GVZN8"
// };

// // ✅ Firebase 앱은 한 번만 초기화해야 합니다
// const app = firebase.apps.length === 0
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

// // 📊 Analytics (선택 사항)
// const analytics = firebase.analytics();

// // 🔥 Firestore
// const db = firebase.firestore();
// const likeRef = db.collection("likes").doc("main");

// // ✅ 좋아요 수 가져오기
// export function updateLikeCount() {
//   likeRef.get().then(doc => {
//     if (doc.exists) {
//       document.getElementById("like-count").textContent = doc.data().count;
//     } else {
//       likeRef.set({ count: 0 });
//     }
//   });
// }

// // 👍 좋아요 추가
// export function like() {
//   likeRef.update({
//     count: firebase.firestore.FieldValue.increment(1),
//   });
//   updateLikeCount();
// }

// // 테스트용 함수
// export function like01() {
//   console.log('like01');
// }

// // 초기 실행
// updateLikeCount();
// TypeScript 또는 JavaScript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 프로젝트 설정 (여러분의 실제 프로젝트 설정을 사용하세요!)
// 이 정보는 Firebase 콘솔의 프로젝트 설정 > 일반 탭에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyDfYJRdcK97ZuqglKaVTR1eN8b-8Jdv1q4",
    authDomain: "tokyo-micron-463601-p8.firebaseapp.com",
    projectId: "tokyo-micron-463601-p8",
    storageBucket: "tokyo-micron-463601-p8.firebasestorage.app",
    messagingSenderId: "240808159243",
    appId: "1:240808159243:web:df3412577264a620a6ff0e",
    measurementId: "G-YLG46GVZN8"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 인스턴스 가져오기
const db = getFirestore(app);
const likeRef = db.collection("likes").doc("main");

console.log('likes :: ' + likeRef );

// 👍 좋아요 추가
export function like() {
  likeRef.update({
    count: firebase.firestore.FieldValue.increment(1),
  });
  updateLikeCount();
}

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
// export { db }; // 다른 파일에서 Firestore 인스턴스를 사용할 수 있도록 내보내기

