function addNum(x,y){ //addNUm 함수 정의
    return x+y;//x,y는 함수의 매개변수
}
document.getElementById('add').innerHTML=addNum(2,3);//인수로 2와 3을 전달해서 호출

function multiNum(x,y){
    return x*y;
}
var num = multiNum(3,4);// 함수 호출 후 반환 값을 변수 num에 저장
document.getElementById('mul').innerHTML=num;

function sqr(x){
    return x*x;
}
var sqrNum=sqr;//변수에 함수 대입
document.getElementById("sqr").innerHTML=sqr(4)+"<br>"; //함수 sqr 호출
document.getElementById("sqr").innerHTML+=sqrNum(4);//변수 sqrNum을 함수처럼 호출