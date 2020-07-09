/*
정규 표현식: 문자열에서 특정한 규칙을 가지는 문자열의 집합을 찾아내기 위한 검색 패턴
1. 정규 표현식 리터럴을 이용한 생성
    /검색패턴/플래그
2. RegExp 객체를 이용한 생성

정규 표현식을 생성할 때 플래그를 사용하여 기본 검색 설정을 변경
설정된 플래그는 나중에 추가되거나 삭제될 수 없음
i: 검색 패턴을 비교할 때 대소문자를 구분하지 않도록 설정함.
g: 검색 패턴을 비교할 때 일치하는 모든 부분을 선택하도록 설정함.
m: 검색 패턴을 비교할 때 여러 줄의 입력 문자열을 그 상태 그대로 여러 줄로 비교하도록 설정함.
y: 대상 문자열의 현재 위치부터 비교를 시작하도록 설정함.

*/
var regStr=/a+bc/; //정규 표현식 리터럴을 이용한 생성
var regObj=new RegExp("a+bc"); //RegExp 객체를 이용한 생성
document.getElementById('exp').innerHTML =regStr+"<br>"+regObj;

//search() 메소드는 해당 문자열에서 인수로 전달받은 정규 표현식과 일치하는 첫 번째 문자열의 위치를 반환해주는 자바스크립트의 String 메소드
var targetStr = "간장 공장 공장장은 강 공장장이고, 된장 공장 공장장은 장 공장장이다.";
var strReg1=/공장/;
var strReg2=/장공/;
document.getElementById('search').innerHTML=targetStr.search(strReg1)+"<br>";
document.getElementById('search').innerHTML+=targetStr.search(strReg2);

targetStr="bcabcAB";
var strReg=/AB/; //기본 설정으로 대소문자 구분
var strUsingFlag=/AB/i ; // 대소문자 구분 안함 new RegExp("AB","i")와 동일
var strUsingFlag2=/c/g

document.getElementById('flag').innerHTML
=targetStr.search(strReg)+"<br>"+targetStr.search(strUsingFlag)+"<br>"+
targetStr.search(strUsingFlag2);