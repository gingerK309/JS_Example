/*
window 객체는 웹 브라우저의 창을 나타내는 객체, 대부분의 웹 브라우저에서 지원
window 객체의 프로퍼티: 모든 객체, 전역 함수, 전역 변수
window 객체의 메소드: 전역  함수
*/
var windowWidth =window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight ||document.body.clientHeight;
document.getElementById('window').innerHTML=
"웹 브라우저의 너비는 "+windowWidth+"픽셀이고, 높이는 "+windowHeight+"픽셀입니다.";

alert("전역 함수 호출 시 window 접두사 생략 가능함");
document.getElementById('screen').innerHTML= "현재 브라우저의 수평 위치는 "+screenX+"입니다.<br>";
document.getElementById('screen').innerHTML+= "현재 브라우저의 수직 위치는 "+screenY+"입니다.<br>";
document.getElementById('screen').innerHTML+= document.title;

var newWindowObj;
var strWindowFeatures= "menubar =yes, location=yes, resizable= yes, scrollbars=yes, status=yes";
//변수 strWindowFeatures 를 통해 새롭게 여는 웹 브라우저 창의 옵션들을 일일이 설정할 수 있음
function openWindow(){
    newWindowObj=window.open("https://github.com/","깃허브",strWindowFeatures);
}
function closeNewWindow(){
    newWindowObj.close();
}
