var firstNum=10;
var secondNum=10.00;
var thirdNum=10e6;
var fourthNum =10e-6;

document.getElementById("number").innerHTML=
firstNum+"<br>"+secondNum+"<br>"+thirdNum+"<br>"+fourthNum+"<br>";

var firstStr="큰따옴표 문자열"; 
var secondStr='작은따옴표 문자열';
var thirdStr="내 이름은 '홍길동'입니다." //작은따옴표는 큰따옴표로 둘러싸인 문자열에만 포함될 수 있음
var fourthStr='내 이름은 "홍길동"입니다.' //큰따옴표는 작은따옴표로 둘러싸인 문자열에만 포함될 수 있음.

document.getElementById("str").innerHTML=
firstStr+"<br>"+secondStr+"<br>"+thirdStr+"<br>"+fourthStr+"<br>";

var num=10;
var str="JavaScript";
document.getElementById("result").innerHTML=(num+str);

var num1=10;
var num2=11;
document.getElementById("bool").innerHTML=(num1==num2);

var sym= Symbol("javascript"); //심볼 타입
var symObj =Object(sym); // 객체 타입
document.getElementById("symbol").innerHTML=
(typeof sym)+"<br>"+(typeof symObj);

document.getElementById("return").innerHTML=(typeof 10)+"<br>";
document.getElementById("return").innerHTML+=(typeof "문자열")+"<br>";
document.getElementById("return").innerHTML+=(typeof true)+"<br>";
document.getElementById("return").innerHTML+=(typeof undefined)+"<br>";
document.getElementById("return").innerHTML+=(typeof null)+"<br>";

/* null이란 object 타입이며, 아직 '값'이 정해지지 않은 것을 의미
또한, undefined란 null과는 달리 '타입'이 정해지지 않은 것을 의미
따라서 자바스크립트에서 undefined는 초기화되지 않은 변수나 존재하지 않는 값에 접근할 때 반환 */

var undef; // 초기화하지 않았으므로 undefined 값을 반환함.
var Null = null; // object 타입의 null 값
// 정의되지 않은 변수에 접근하면 undefined 값을 반환함.
document.getElementById("no").innerHTML=
(typeof undef)+"<br>"+(typeof Null)+"<br>"+(typeof what);

var dog = {name: "해피", age: 3}; //객체 생성
//객체의 프로퍼티 참조
document.getElementById("dog").innerHTML=
"강아지의 이름은 "+dog.name+"이고, 나이는 "+dog.age+"살 입니다.";