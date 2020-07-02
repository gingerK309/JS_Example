var num=20; //변수의 선언과 함께 초기화
document.getElementById("result").innerHTML=num+"<br>"
num="이십"; //문자열 대입
document.getElementById("result").innerHTML+=num+"<br>";
var num; //한 변수를 여러번 초기화 할 수 있지만 재선언은 불가
document.getElementById("result").innerHTML+=num;

var result = 10+ "문자열" //문자열 연결을 위해 숫자 10이 문자열로 변환됨
document.getElementById("result1").innerHTML= result + "<br>";
result = "3"*"5"; //곱셈 연산을 위해 두 문자열이 모두 숫자로 변환됨
document.getElementById("result1").innerHTML+=result +"<br>" ;
result = 1-"문자열";
document.getElementById("result1").innerHTML+=result;

document.getElementById("result2").innerHTML= Number("10")+"<br>";
document.getElementById("result2").innerHTML+=String(true)+"<br>";
document.getElementById("result2").innerHTML+= Boolean(0)+"<br>";
document.getElementById("result2").innerHTML+= Object("10")+"<br>";

var res  = String(Date());
document.getElementById("date").innerHTML=res+"<br>";
res = Date().toString();
document.getElementById("date").innerHTML += res+"<br>";
var date = new Date(); //Date 객체 생성
res = date.getFullYear();
document.getElementById("date").innerHTML +=res+"<br>";
res = date.getTime();
document.getElementById("date").innerHTML +=res;
