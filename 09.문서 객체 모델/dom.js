/*
자바스크립트에서 특정 HTML 요소를 선택하는 방법
1. HTML 태그 이름(tag name)을 이용한 선택: getElementsByTagName()
2. 아이디(id)를 이용한 선택: getElementById()
3. 클래스(class)를 이용한 선택: getElementsByClassName() 
4. name 속성(attribute)을 이용한 선택: getElementByName() 
5. CSS 선택자(selector)를 이용한 선택: querySelectorAll() 
6. HTML 객체 집합(object collection)을 이용한 선택
*/
var selectedItem = document.getElementsByTagName("li");// 모든 <li> 요소를 선택함
for(var i=0;i<5;i++){
    selectedItem.item(i).style.color="blue";//선택된 모든 요소의 텍스트 색상 변경
}
//item() 메소드는 해당 HTML 객체 집합에서 전달받은 인덱스에 해당하는 요소를 반환
selectedItem=document.getElementById("even");
selectedItem.style.color="red";

selectedItem=document.getElementsByClassName("odd");//클래스가 "odd"인 모든 요소를 선택
for(var i=0; i<selectedItem.length;i++){
    selectedItem.item(i).style.color="goldenrod";
}

selectedItem=document.getElementsByName("first");//name 속성값이 "first"인 모든 요소를 선택
for(var i=0;i<selectedItem.length;i++){
    selectedItem.item(i).style.color="orange";
}

selectedItem=document.querySelectorAll("li.Css");//클래스가 "Css"인 요소 중에서 <li> 요소만을 선택
for(var i=0; i<selectedItem.length;i++){
    selectedItem.item(i).style.color="deepskyblue";
}

var title=document.title;
document.getElementById('title').innerHTML=title;

var str=document.getElementById('text');
str.innerHTML="문장 바꿔치기";

str=document.getElementById('txt');
function changeColorLight(){
    str.style.color="lime"
}
function changeColorDark(){
    str.style.color="navy";
}