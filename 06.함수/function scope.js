var x=10,y=20;
function sub(){//전역 함수
    return x-y; //전역 변수인 x,y 에 접근함
}
document.getElementById('func').innerHTML="전역 함수에서 x - y의 값은 "+sub()+"입니다.<br>";

function parentFunc(){
    var x=1,y=2;//전역 변수와 같은 이름으로 선언, 전역 변수의 범위 제한
    function add(){//내부 함수로 선언
        return x+y; // 지역변수 x,y에 접근
    }
    return add();
}
document.getElementById('func').innerHTML+="내부 함수에서 x + y의 값은 "+parentFunc()+"입니다.<br>";

var globalNum=10;
function printNum(){
    document.getElementById('global').innerHTML="지역 변수 globalNum 선언 전의 globalNum의 값은 "+globalNum+"입니다.<br>";
    var globalNum=20;
    document.getElementById('global').innerHTML+="지역 변수 globalNum 선언 전의 globalNum의 값은 "+globalNum+"입니다.";
}
printNum();