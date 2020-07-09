/*
RegExp 객체: 정규 표현식을 구현한 자바스크립트 표준 내장 객체
    new RegExp(검색패턴[, 플래그]);
1. 검색 패턴을 나타내는 정규 표현식은 따옴표나 슬래시(/)로 감싸야 함
2. 기본 검색 설정을 변경할 수 있는 플래그는 필요할 때만 전달할 수 있음

RegExp.prototype 메소드: 정규 표현식을 표현
1. RegExp.prototype.exec(): 특정 패턴을 검색하여 패턴과 일치하는 문자열 반환, 일치하는 문자열 없으면 null 반환
2. RegExp.prototype.test(): 문자열에 특정 패턴과 일치하는 문자열이 있는지를 검색, 패턴과 일치하는 문자열이 있으면 true를, 없으면 false를 반환
*/
var targetStr="abbcdefabgh";
var firstResult=/ab+/.exec(targetStr);//패턴과 일치하는 문자열이 여러 개인 경우
var secondResult=/abbb+/.exec(targetStr);//패턴과 일치하는 문자열이 하나도 없는 경우
document.getElementById('ro').innerHTML=firstResult+"<br>"+secondResult;

firstResult=/ab+/.test(targetStr); //패턴과 일치하는 문자열이 여러 개인 경우
secondResult=/abbb+/.test(targetStr);//패턴과 일치하는 문자열이 하나도 없는 경우
document.getElementById('ro2').innerHTML=firstResult+"<br>"+secondResult;