function localNum(){
    var num=10;
    document.getElementById('local').innerHTML="함수 내부에서 변수 num의 타입은 "+typeof num+"입니다.<br>";
}
localNum();
document.getElementById('local').innerHTML+="함수의 호출이 끝난 뒤 변수 num의 타입은 "+typeof num+"입니다.";


var n= 15;
var num=10;
function globalNum(){
    var n=22;//같은 이름의 지역 변수 n 선언
    document.getElementById('n').innerHTML="함수 내부에서 변수 n의 값은 "+n+"입니다.<br>";
    document.getElementById('w').innerHTML="함수 내부에서 지역 변수 n의 값은 "+n+"입니다.<br>";
    document.getElementById('w').innerHTML+="함수 내부에서 전역 변수 n의 값은 "+window.n+"입니다.";
    document.getElementById('global').innerHTML="함수 내부에서 변수 num의 값은 "+num+"입니다.<br>";
    num=20;//전역 변수 값 함수 내부에서 변경
}
globalNum();
document.getElementById('global').innerHTML+="함수 호출이 끝난 후 변수 num의 값은 "+num+"입니다.";
document.getElementById('n').innerHTML+="함수 호출이 끝난 뒤 변수 n의 값은 "+n+"입니다.";


function globalNum2(){
    num2=5; //var 키워드를 사용하지 않으면 전역 변수로 선언됨
    document.getElementById('global2').innerHTML="함수 내부에서 변수 num2의 값은 "+num2+"입니다.<br>";
}
globalNum2();
document.getElementById('global2').innerHTML+="함수의 호출이 끝난 뒤 변수 num2의 값은 "+num2+"입니다.";