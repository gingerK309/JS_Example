var month;//변수의 선언
var date=25; //변수의 선언과 동시에 초기화
month=12;//변수의 초기화
document.getElementById("date").innerHTML=
"크리스마스는 "+ month +"월 "+ date+"일입니다.";

var month,date;
var hours =7, minutes =15;
month =10,date=5;
document.getElementById("date2").innerHTML=
"이번 모임의 날짜는 "+month+"월 "+date+"일입니다.<br>";
document.getElementById("date2").innerHTML+=
hours+"시 "+minutes+"분까지 꼭 와주세요!";

var num=10;
document.getElementById("res").innerHTML=num+"<br>";
num=[10,20,30];//배열 할당
document.getElementById("res").innerHTML+=num+"<br>";
var num;// 이 재선언문은 무시함
document.getElementById("res").innerHTML+=num+"<br>";

var num1;
document.getElementById("num").innerHTML=num1+"<br>";
num1=10; 
document.getElementById("num").innerHTML+=num1+"<br>";