/*
이벤트 리스너 호출이 발생하면 이벤트 리스너는 인수로 이벤트 객체를 전달받으며, 
식별자를 통해 전달받은 이벤트 객체를 참조
이벤트 객체: 특정 타입의 이벤트와 관련이 있는 객체
모든 이벤트 객체는 이벤트의 타입을 나타내는 type 프로퍼티와 이벤트의 대상을 나타내는 target 프로퍼티를 가짐

특정 타입의 이벤트가 발생하면 브라우저는 다음과 같은 순서로 이벤트를 호출
1. 이벤트의 대상이 되는 객체나 요소에 프로퍼티로 등록한 이벤트 리스너를 가장 먼저 호출
2. 그 후 addEventListener() 메소드를 사용하여 등록한 이벤트 리스너를 등록한 순서대로 호출

이벤트 전파: 이벤트가 발생했을 때 브라우저가 이벤트 리스너를 실행시킬 대상 요소를 결정하는 과정
Document 객체나 HTML 문서의 요소에서 이벤트가 일어나면 대상 요소를 결정하기 위해 이벤트의 전파가 발생
1. 버블링(bubbling) 전파 방식: 이벤트가 발생한 요소부터 시작해서, DOM 트리를 따라 위쪽으로 올라가며 전파되는 방식
2. 캡쳐링(capturing) 전파 방식: 이벤트가 발생한 요소까지 DOM 트리의 최상위부터 아래쪽으로 내려가면 전파되는 방식
 addEventListener() 메소드의 세 번째 인수에 true를 전달

이벤트 기본 동작 취소
- preventDefalult() 메소드 
- returnValue 프로퍼티

이벤트 전파 취소
- stopPropagation() 메소드
- cancelBubble 프로퍼티
*/
var btn =document.getElementById("btn");
btn.addEventListener("click",clickBtn);
function clickBtn(event){
    document.getElementById('text').innerHTML=
    "이 이벤트의 타입은 "+event.type +"이며, 이벤트의 대상은 "+event.target+"입니다.";
}

document.getElementById("divBox").addEventListener("click", clickDiv);
document.getElementById("paraBox").addEventListener("click", clickPara);
document.getElementById("spanBox").addEventListener("click", clickSpan);
		
function clickDiv(event) {
	document.getElementById("box").innerHTML += "div 요소를 클릭했어요.<br>";
}
function clickPara(event) {
	document.getElementById("box").innerHTML += "p 요소를 클릭했어요.<br>";
}
function clickSpan(event) {
	document.getElementById("box").innerHTML += "span 요소를 클릭했어요.<br>";
}

document.getElementById("div").addEventListener("click", clickDiv2,true);
document.getElementById("para").addEventListener("click", clickPara2,true);
document.getElementById("span").addEventListener("click", clickSpan2,true);

function clickDiv2(event) {
	document.getElementById("txt").innerHTML += "div 요소를 클릭했어요.<br>";
}
function clickPara2(event) {
	document.getElementById("txt").innerHTML += "p 요소를 클릭했어요.<br>";
}
function clickSpan2(event) {
	document.getElementById("txt").innerHTML += "span 요소를 클릭했어요.<br>";
}

document.getElementById("divC").addEventListener("click", clickDiv3);
document.getElementById("paraC").addEventListener("click", clickPara3);
document.getElementById("link").addEventListener("click", clickLink);

function clickDiv3(event) {
	document.getElementById("cancel").innerHTML += "div 요소를 클릭했어요.<br>";
}
function clickPara3(event) {
	document.getElementById("cancel").innerHTML += "p 요소를 클릭했어요.<br>";
}
function clickLink(event) {
    event.preventDefault();//링크의 기본 동작 취소
    document.getElementById("cancel").innerHTML+="링크의 기본 동작을 취소했어요.<br>";
	document.getElementById("cancel").innerHTML += "a 요소를 클릭했어요.<br>";
}

document.getElementById("divEC").addEventListener("click", clickDiv4);
document.getElementById("paraEC").addEventListener("click", clickPara4);
document.getElementById("linkEC").addEventListener("click", clickLink2);


function clickDiv4(event) {
	document.getElementById("ec").innerHTML += "div 요소를 클릭했어요.<br>";
}
function clickPara4(event) {
	document.getElementById("ec").innerHTML += "p 요소를 클릭했어요.<br>";
}
function clickLink2(event) {
    event.preventDefault();//링크의 기본 동작 취소
    document.getElementById("ec").innerHTML+="링크의 기본 동작을 취소했어요.<br>";
    event.stopPropagation();//이벤트의 전파 취소
    document.getElementById("ec").innerHTML += "이벤트의 전파를 취소했어요.<br>";
}