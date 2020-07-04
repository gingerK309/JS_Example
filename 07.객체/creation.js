/*
1. 리터럴 표기(literal notation)를 이용한 방법
2. 생성자 함수(constructor function)를 이용한 방법: new 연산자
3. Object.create() 메소드를 이용한 방법: Object.create(프로토타입객체[, 새로운객체의프로퍼티1, 새로운객체의프로퍼티2, ...]);
메모리에 대입된 객체: 인스턴스(instance)
*/ 
var cat ={
    name: "나비",
    family:"코리안 숏 헤어",
    age: 1,
    weight: 0.2
};
document.getElementById('cat').innerHTML="우리집 고양이의 이름은 "+cat.name+"이고, 종은 "+cat.family+"입니다.";

var day = new Date();
document.getElementById('year').innerHTML="올해는 "+ day.getFullYear()+"년입니다.";

var obj= Object.create(null,{ //null 프로토타입을 사용하여 새로운 객체 생성
    x:{value:100,enumerable:true}, //x 좌표를 나타내는 열거할 수 있는 속성
    y:{value:200,enumerable:true} //y 좌표를 나타내는 열거할 수 있는 속성
});
document.getElementById('obj').innerHTML=obj.x+"<br>";
document.getElementById('obj').innerHTML+=obj.y+"<br>";
document.getElementById('obj').innerHTML+=Object.getPrototypeOf(obj);//객체의 프로토타입 반환