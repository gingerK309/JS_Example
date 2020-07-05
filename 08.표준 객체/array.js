/*
Array 메소드는 Array 객체에 정의된 배열과 관련된 작업을 할 때 사용하는 메소드
1. Array.isArray(): 전달받은 값이 Array 객체인지 아닌지 검사
2. Array.from(): 배열과 비슷한 객체와 반복할 수 있는 객체를 배열처럼 변환시켜줌 
3. Array.of(): 인수의 수나 타입에 상관없이 인수로 전달받은 값을 가지고 새로운 Array 인스턴스를 생성
인수로 정수 10을 전달하면, 정수 10을 배열 요소로 가지는 길이가 1인 배열을 생성 
*/
document.getElementById('arr').innerHTML=Array.isArray([])+"<br>";
document.getElementById('arr').innerHTML+=Array.isArray(new Array())+"<br><br>";
document.getElementById('arr').innerHTML+=Array.isArray(123)+"<br>";
document.getElementById('arr').innerHTML+=Array.isArray("Array")+"<br>";
document.getElementById('arr').innerHTML+=Array.isArray(true);

function arrayFrom(){
    return Array.from(arguments);
}
document.getElementById('from').innerHTML=arrayFrom(1,2,3)+"<br>";
var myMap= new Map([[1,2],[3,4]]);
document.getElementById('from').innerHTML+=Array.from(myMap)+"<br>";
document.getElementById('from').innerHTML+=Array.from("JavaScript");

document.getElementById('of').innerHTML=new Array(10)+"<br>"//10개의 인덱스를 갖는 빈 배열 생성
document.getElementById('of').innerHTML+=Array.of(10);// 숫자 10을 인덱스로 갖는 배열 생성