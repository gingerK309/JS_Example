/*
객체 메소드
1. hasOwnProperty(): 특정 프로퍼티가 해당 객체에 존재하는지 검사, 상속받은 프로퍼티는 false
2. propertyIsEnumerable(): hasOwnProperty() 메소드의 결과가 true 이면서 동시에 열거할 수 있는 프로퍼티인지 검사
3. isPrototypeOf(): 특정 객체의 프로토타입 체인에 현재 객체가 존재하는지 검사
4. isExtensible(): 객체에 새로운 프로퍼티를 추가할 수 있는지 여부를 반환
5. toString(): 이 메소드를 호출한 객체의 값을 문자열로 반환
6. valueOf(): 특정 개체의 원시 타입 값을 반환, 원시 타입이 없다면 객체 자신을 반환
*/
function Dog(color,name,age,family){
    this.color=color;
    this.name=name;
    this.age=age;
    this.family=family;
    this.breed=function(){return this.color+" "+this.family;}
}
var myDog=new Dog("검정색","곰",3,"불독");
document.getElementById('prop').innerHTML=myDog.hasOwnProperty("color")+"<br>";
document.getElementById('prop').innerHTML+=myDog.hasOwnProperty("breed")+"<br>";
document.getElementById('prop').innerHTML+=myDog.hasOwnProperty("class");//false

myDog= new Dog("흰색","마루",1);
Object.defineProperty(myDog,'color',{enumerable:false});//color의 열거 속성 false
document.getElementById('enum').innerHTML=myDog.propertyIsEnumerable("color")+"<br>";
document.getElementById('enum').innerHTML+=myDog.propertyIsEnumerable("name")+"<br>";
document.getElementById('enum').innerHTML+=myDog.propertyIsEnumerable("age");

var day=new Date();
document.getElementById('date').innerHTML=Date.prototype.isPrototypeOf(day)+"<br>"+day+"<br>";
document.getElementById('date').innerHTML+=Date.prototype.isPrototypeOf(new String());

document.getElementById('ex').innerHTML=Object.isExtensible(day)+"<br>";//객체 day에 새로운 프로퍼티를 추가할 수 있는지 검사
Object.preventExtensions(day);//해당 객체에 새로운 프퍼티를 추가할 수 없도록 설정
document.getElementById('ex').innerHTML+=Object.isExtensible(day);

var arr=[10,"문자열",true];
var bool=false;
function func(){return 0;}
document.getElementById('str').innerHTML=arr.toString()+"<br>";
document.getElementById('str').innerHTML+=bool.toString()+"<br>";
document.getElementById('str').innerHTML+=func.toString();

function val(n){
    this.number =n;
}
myFunc = new val(4);
document.getElementById('val').innerHTML= myFunc+5+"<br>";

val.prototype.valueOf=function(){//valueOf 메소드를 정의
    return this.number;
}
document.getElementById('val').innerHTML+= myFunc+5;

//접근자 프로퍼티
//getter: 특정 프로퍼티의 값을 받아옴
//setter: 특정 프로퍼티의 값을 설정

var gildong ={age:18};
document.getElementById('getter').innerHTML=gildong.age+"<br>";
Object.defineProperty(gildong,"americanAge",{get: function(){return this.age-1;}});
document.getElementById('getter').innerHTML+=gildong.americanAge;

gildong.age=20;
document.getElementById('setter').innerHTML=gildong.age+"<br>";
Object.defineProperty(gildong,"changeAge",{set:function(n){this.age=this.age-n;}});
gildong.changeAge=5;
document.getElementById('setter').innerHTML+=gildong.age;