/*
자바스크립트에서는 현재 존재하고 있는 객체를 프로토타입으로 사용하여, 해당 객체를 복제하여 재사용하는 것을 상속
포로토타입: 상속되는 정보를 제공하는 객체
자바스크립트의 모든 객체는 프로토타입(prototype)이라는 객체를 가짐
*/
var obj = new Object();//이 객체의 프로토타입은 Object.prototype 입니다.
var arr = new Array();// 이 객체의 프로토타입은 Array.prototype 입니다.
var date = new Date();// 이 객체의 프로토타입은 Date.prototype 입니다.
//뿐만 아니라 Object.prototype을 프로토타입으로 가짐 
//-> 프로토타입이 상속되는 가상의 연결고리: 프로토타입 체인
//자바스크립트에 내장된 모든 생성자나 사용자 정의 생성자는 Object.prototype을 가짐(상속받음)

function Dog(color,name,age){ //개에 관한 생성자 함수
    this.color=color;//색에 관한 프로퍼티
    this.name=name;//이름에 관한 프로퍼티
    this.age=age;//나이에 관한 프로퍼티
    this.family="도베르만";//프로토타입에 프로퍼티를 추가하면 기본값
    this.breed=function(){return this.color+" "+this.family;};
}
var myDog = new Dog("흰색","마루",1);//이 객체는 Dog 라는 프로토타입을 가짐
document.getElementById('dog').innerHTML=
"우리 집 강아지는 "+myDog.name+"라는 이름의 "+myDog.color+" 털이 매력적인 강아지입니다.";
myDog.family ="시베리안 허스키";//객체에 품종에 관한 프로퍼티를 추가
myDog.breed=function(){
    return this.color+" "+this.family; //털색을 포함한 품종을 반환해주는 메소드
}
document.getElementById('obj').innerHTML="우리 집 강아지는 "+myDog.breed()+"입니다.";

var hisDog=new Dog("갈색","콩이",3);
document.getElementById('proto').innerHTML=
"우리 집 강아지는 "+myDog.family+"이고, 친구네 집 강아지는 "+hisDog.family+"입니다.";

function Cat(color,name,age){
    this.color=color;
    this.name=name;
    this.age=age;
}
Cat.prototype.family="코리안 숏 헤어"; //현재 존재하고 있는 Cat 프로토타입에 family 프로퍼티를 추가함
Cat.prototype.breed=function(){
    return this.color+" "+this.family;
};

var myCat= new Cat("노란색","나비",1);
var hisCat= new Cat("검정색","냥이",3);

document.getElementById('cat').innerHTML="우리 집 고양이는 "+myCat.family+"이고, 친구네 집 고양이도 "+hisCat.family+"입니다.<br>";
document.getElementById('cat').innerHTML+="우리 집 고양이 품종은 "+myCat.breed()+"입니다.<br>";
document.getElementById('cat').innerHTML+="친구네 집 고양이 품종은 "+hisCat.breed()+"입니다.";
