var x= 3+4;
var y="좋은 "+"하루 되세요!";
var z= 12+"월"
document.getElementById("str").innerHTML= x+"<br>";
document.getElementById("str").innerHTML+= y +"<br>";
document.getElementById("str").innerHTML+= z+"<br>"; // 피연산자가 하나라도 문자열이면 문자열 결합 연산

var a=3,b=5;
var result = (a>b)? a:b ;//수식이 참이면 a, 거짓이면 b 반환
document.getElementById("ternary").innerHTML="둘 중에 더 큰 수는 "+result+"입니다.";



var arr=[1,2,3];
delete arr[2];
document.getElementById("arr").innerHTML= arr+"<br>";//배열에 빈자리 생김
document.getElementById("arr").innerHTML+= arr[2]+"<br>";
document.getElementById("arr").innerHTML+= arr.length; //배열의 크기가 줄어들진 않음

document.getElementById("type").innerHTML=(typeof "문자열")+"<br>";
document.getElementById("type").innerHTML+=(typeof 10)+"<br>";
document.getElementById("type").innerHTML+=(typeof NaN)+"<br>";
document.getElementById("type").innerHTML+=(typeof false)+"<br>";
document.getElementById("type").innerHTML+=(typeof undefined)+"<br>";
document.getElementById("type").innerHTML+=(typeof new Date())+"<br>";
document.getElementById("type").innerHTML+=(typeof null);

var str = new String("이것은 문자열입니다.");
document.getElementById("res").innerHTML= str+"<br>";
document.getElementById("res").innerHTML+=(str instanceof Object) +"<br>";
document.getElementById("res").innerHTML+=(str instanceof String) +"<br>";
document.getElementById("res").innerHTML+=(str instanceof Array )+"<br>";
document.getElementById("res").innerHTML+=(str instanceof Number) +"<br>";
document.getElementById("res").innerHTML+=(str instanceof Boolean);