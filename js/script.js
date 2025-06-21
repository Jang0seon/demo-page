console.log("GitHub Pages에서 실행되는 JS 파일입니다.");

/* 스트롤시 fade-in, fade-out */
// Intersection Observer 생성
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {//관찰 대상이 현재 루트 안에 포함되어 있는지의 여부
          // 화면에 들어옴
          entry.target.classList.add("fade-in");
        } 
        // 한번 나타나면 사라지지 않음.
        // else {
        //   // 화면에서 나감
        //   entry.target.classList.remove("fade-in");
        // }
      });
    },
    // 화면에서 해당 요소가 10% 이상 보일 경우 화면에 들어온 것으로 판단함
    { threshold: 0.1 } //옵저버가 실행되기 위해 타겟의 가시성이 얼마나 필요한지 백분율
  );

  // 관찰 대상 설정
  const targetElements = document.querySelectorAll(".fade-wrap");
  targetElements.forEach((element) => {
    observer.observe(element);
  });

/* 모바일 진동 - 최근 폰엔 사용이 안되는 듯 싶다..?
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate; // 작동되는 진동 메소드가 다르므로 통합
function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate(20000); // 진동을 울리게 한다. 1000ms = 1s 이다.
  } else {
    alert("진동을 지원하지 않는 기종 입니다.");
  }
}
 
function vibratearray() {
  if (navigator.vibrate) {
    navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]); // 배열로도 가능하다. 진동은 SOS 모스부호
  } else {
    alert("진동을 지원하지 않는 기종 입니다.");
  }
}
function stop() {
  navigator.vibrate(0); // (0) 대신에 ([]) 을 넣어도 동일하다.
}
*/


/* warp */
window.addEventListener("DOMContentLoaded", function (ev) {
  const { innerHeight } = window;
  document.documentElement.style.setProperty("--app-height",`${innerHeight}px`);
});

const wrap = document.getElementsByClassName('wrap')[0]; // 보일 영역
const container = document.getElementsByClassName('container');
let page = 0; // 영역 포지션 초기값
const lastPage = container.length - 1; // 마지막 페이지

document.addEventListener('wheel',(e)=>{
    e.preventDefault();
    if(e.deltaY > 0){
        page++;
    }else if(e.deltaY < 0){
        page--;
    }
    if(page < 0){
        page=0;
    }else if(page > lastPage){
        page = lastPage;
    }
    console.log(e.deltaY)
    wrap.style.top = page * -100 + '%';
},{passive:false}); // 디폴트 기능 제거 - 스크롤

// let touchstartY = 0;

// /* Mobile warp - touchstart */
// let touchStartTime;
// document.addEventListener('touchstart', (e)=>{
//   // e.preventDefault();
//   // e.stopPropagation();
//   touchStartTime = Date.now();
//   touchstartY = e.touches[0].clientY;
//   console.log('touchstart :touchstartY: ' + touchstartY);
// },{passive:false});
// document.addEventListener('touchmove', (e) => {
//   // 터치 이동 시 탭 동작 취소
//   touchStartTime = null;
// });
// document.addEventListener('touchend', (e)=>{
//   //e.stopPropagation();
//   const deltaY = touchstartY - e.changedTouches[0].clientY;
//   console.log('touchend : e.changedTouches[0].clientY : ' + e.changedTouches[0].clientY);
//   if(touchStartTime){  
//     const touchEndTime = Date.now();
//     const timeTaken = touchEndTime - touchStartTime;
//     console.log('timeTaken::'+timeTaken);
//     console.log('e.target::'+e.target.tagName);
//     // if (timeTaken < 250) {
//       e.target.click() 
//     // }
//   } else {
//       if(deltaY > 0){
//         page++;
//       } else if(deltaY < 0){
//         page--;
//       }
//       if(page < 0){
//           page=0;
//       } else if(page > lastPage){
//           page = lastPage;
//       }
//       wrap.style.top = page * -100 + '%';
//   }
// },{passive:false}); // 디폴트 기능 제거 - 스크롤

$("#attend").click(function(){
  let page_1_0_classList = document.getElementById("page_1_0").classList;
  // page_1_0_classList.forEach(element => {
  //   if(element.contains('backdrop-b2-b5-scc')){
  //     $("#page_1_0").removeClass('backdrop-b2-b5');
  //     $("#content").removeClass('hd');
  //   }else{
  //     $("#page_1_0").addClass('backdrop-b2-b5');
  //     $("#content").addClass('hd');
  //   }
  // });
  console.log(page_1_0_classList.contains('backdrop-b2-b5'))
  if(page_1_0_classList.contains('backdrop-b2-b5')){
    $("#page_1_0").removeClass('backdrop-b2-b5');
    $("#content").removeClass('hd');
  }else{
    $("#page_1_0").addClass('backdrop-b2-b5');
    $("#content").addClass('hd');
  }
});
// document.querySelector("iframe").addEventListener("load", function(){
//   let iframe = document.querySelector("iframe");
//   console.log(iframe.contentDocument.getElementsByClassName("KA8vlc").item(0))
//   // iframe.contentDocument().getElementsByClassName(KA8vlc).item(0).remove();
// });
// $("iframe").one("load", function() {
//   $("iframe").contents().find(".KA8vlc").remove();
// })

// document.getElementById("attend").addEventListener('click', function(){
//   console.log(document.getElementsByTagName("iframe").item(0));
//   console.log(document.getElementsByTagName("iframe").item(0).get);
//   for(let i = 0 ; i < 4; i++){
//     console.log('document.getElementsByClassName("KA8vlc").item(0)::'
//       +document.getElemesntByClassName("KA8vlc").item(0));
// });
  
//   document.getElementsByClassName("KA8vlc").item(0).remove(); // 이메일 비공개
//   document.getElementsByClassName("zAVwcb").item(0).remove(); // 하단 구분선
//   document.getElementsByClassName("md0UAd").item(0).remove(); // 필수 표시
//   document.getElementsByClassName("UpwdYb").item(0).remove(); // 네이트워크 상태
// });




//1FAIpQLSf9j-XH6aVXboQBKsNuQaXTpzGXvLPeW2Hm1BmNHtQ4zn9wTQ
