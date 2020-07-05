var strKor="한글";
var strEng="abcABC";
document.getElementById('len').innerHTML=strKor.length+"<br>";
document.getElementById('len').innerHTML+=strEng.length;

/* 이스케이프 시퀀스
1. 16진수 이스케이프 시퀀스(hexadecimal escape sequence)
2. 유니코드 이스케이프 시퀀스(unicode escape sequence)
3. 유니코드 코드 포인트 이스케이프(unicode code point escape)
*/
document.getElementById('esc').innerHTML="\xA2"+"<br>";// \x 다음은 16진수 수로 인식하는 16진수 이스케이프
document.getElementById('esc').innerHTML+="\u00A2"+"<br>";// \u 다음은 유니코드로 인식하는 유니코드 이스케이프
document.getElementById('esc').innerHTML+=String.fromCodePoint(0x00A2);// ECMAScript 6부터 새롭게 추가된 유니코드 코드 포인트 이스케이프 방식

document.getElementById('enter').innerHTML="이 문자열은 아주 긴 문자열입니다. \
따라서 몇 번에 걸친 줄 나누기가 필요합니다. \
자바스크립트에서는 역슬래시와 문자 결합 연산자를 이용하여 줄을 나눌 수 있습니다.<br><br>";
document.getElementById('enter').innerHTML+="이 문자열은 아주 긴 문자열입니다."+
"따라서 몇 번에 걸친 줄 나누기가 필요합니다."+
"자바스크립트에서는 역슬래시와 문자 결합 연산자를 이용하여 줄을 나눌 수 있습니다.";

var str="JavaScript";
var strObj=new String("JavaScript");//래퍼 객체

document.getElementById('str').innerHTML=str+"<br>";
document.getElementById('str').innerHTML+=strObj+"<br>";
document.getElementById('str').innerHTML+=typeof str+"<br>";
document.getElementById('str').innerHTML+=typeof strObj+"<br>";
document.getElementById('str').innerHTML+=(str==strObj)+"<br>";
document.getElementById('str').innerHTML+=(str===strObj)+"<br>";