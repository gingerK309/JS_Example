/*
strict 모드는 자바스크립트 코드에 더욱 엄격한 오류 검사를 적용
*/
"use strict" //전체 스크립트를 strict 모드로 설정함
try{
    num= 123;
} catch(error){ //선언되지 않은 변수 사용, 에러 발생
    document.getElementById('text').innerHTML = error.name+"<br>";
    document.getElementById('text').innerHTML += error.message;
}