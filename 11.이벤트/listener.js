/*
이벤트 리스너: 이벤트가 발생했을 때 그 처리를 담당하는 함수
해당 객체나 요소에 등록되어야만 호출될 수 있음
객체나 요소에 이벤트 리스너를 등록하는 방법
1. 이벤트의 대상이 되는 객체나 요소에 프로퍼티로 등록하는 방법
- 자바스크립트 코드에서 프로퍼티로 등록
- HTML 태그에 속성으로 등록
2. 객체나 요소의 메소드에 이벤트 리스너를 전달하는 방법
- addEventListener()
    대상객체.addEventListener(이벤트명, 실행할이벤트리스너, 이벤트전파방식)
- attachEvent()
-removeEventListener(): 등록된 이벤트 리스너 삭제
 */
window.onload=function(){ // HTML 문서가 로드될 때 실행되는 함수
 var text=document.getElementById('text');//아이디가 'text'인 요소를 선택함
 text.innerHTML="HTML 문서가 로드되었습니다.";
}

var showBtn = document.getElementById('btn');
showBtn.addEventListener("click",showText);//선택한 요소에 click 이벤트 리스너를 등록
function showText(){
    document.getElementById('text2').innerHTML="안녕하세요?";
}

var btn2 = document.getElementById('btn2'); 
btn2.addEventListener("click",clickBtn);
btn2.addEventListener("mouseover",mouseoverBtn);
btn2.addEventListener("mouseout",mouseoutBtn);

var btn3 = document.getElementById('btn3');
btn3.addEventListener("click",clickBtn2);
btn3.addEventListener("mouseover",mouseoverBtn2);
btn3.addEventListener("mouseout",mouseoutBtn2);

function clickBtn(){
    document.getElementById('text3').innerHTML="버튼이 클릭됐어요!";
}

function mouseoverBtn(){
    document.getElementById('text3').innerHTML="버튼 위에 마우스가 있어요!";
  
}

function mouseoutBtn(){
    document.getElementById('text3').innerHTML="버튼 밖으로 마우스가 나갔어요!";
   
}

function clickBtn2(){
    btn3.removeEventListener("mouseover",mouseoverBtn2);
    btn3.removeEventListener("mouseout",mouseoutBtn2);
    document.getElementById('text4').innerHTML="이벤트 리스너가 삭제됐어요!";
  }

function mouseoverBtn2(){
    document.getElementById('text4').innerHTML="버튼 위에 마우스가 있어요!";
}

function mouseoutBtn2(){
    document.getElementById('text4').innerHTML="버튼 밖으로 마우스가 나갔어요!";
}
