/*
전역 객체: 자바스크립트에 미리 정의된 객체로 전역 프로퍼티나 전역 함수를 담는 공간의 역할
this 연산자를 통해 접근 가능

래퍼 객체: 숫자, 문자열, 불리언 등 원시 타입의 프로퍼티에 접근하려고 할 때 생성되는 임시 객체

대표적인 자바스크립트 표준 객체
1. Number 객체
2. Math 객체
3. Date 객체
4. String 객체
5. Array 객체
*/
var str ="문자열"; //문자열 리터럴 생성
var strObj = new String(str);//문자열 객체 생성

document.getElementById('wrap').innerHTML=str.length+"<br>";//리터럴 값은 내부적으로 래퍼 객체를 생성한 후에 length 프로퍼티를 참조
document.getElementById('wrap').innerHTML+=(str==strObj)+"<br>";//동등 연산자는 리터럴 값과 래퍼 객체를 동일하게 봄
document.getElementById('wrap').innerHTML+=(str===strObj)+"<br>";//일치 연산자는 리터럴 값과 래퍼 객체를 구별함
document.getElementById('wrap').innerHTML+=(typeof str)+"<br>";//string 타입
document.getElementById('wrap').innerHTML+=(typeof strObj);//object 타입
