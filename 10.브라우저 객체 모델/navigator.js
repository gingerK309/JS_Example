/*
navigator 객체는 브라우저 공급자 및 버전 정보 등을 포함한 브라우저에 대한 다양한 정보를 저장하는 객체
*/
document.getElementById('navi').innerHTML="현재 사용 중인 브라우저의 이름은 "+navigator.appName+"입니다.<br>";
document.getElementById('navi').innerHTML+="또한, 해당 브라우저의 코드명은 "+navigator.appCodeName+"입니다.";

document.getElementById('ver').innerHTML="현재 사용 중인 브라우저의 버전 정보는 "+navigator.appVersion+"입니다.<br><br>";
document.getElementById('ver').innerHTML+="userAgent 프로퍼티로 알 수 있는 추가 정보는 "+navigator.userAgent+"입니다.";

document.getElementById('os').innerHTML="현재 브라우저가 실행되고 있는 운영체제는 "+navigator.platform+"입니다.";

document.getElementById('lang').innerHTML="현재 브라우저의 기본 언어 설정은 "+navigator.language+"입니다.";

document.getElementById('enable').innerHTML="현재 브라우저는 자바 애플릿을 "
if(navigator.javaEnabled()){
    document.getElementById('enable').innerHTML+="실행할 수 있습니다.";
}else document.getElementById('enable').innerHTML+="실행 할 수 없습니다.";

document.getElementById('cookie').innerHTML="현재 브라우저는 자바 쿠키를 "
if(navigator.cookieEnabled){
    document.getElementById('cookie').innerHTML+="실행할 수 있습니다.";
}else document.getElementById('cookie').innerHTML+="실행 할 수 없습니다.";