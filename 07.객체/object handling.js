/*
this 키워드는 해당 키워드가 사용된 자바스크립트 코드 영역을 포함하고 있는 객체를 가리킴
메소드 내부에서 사용된 this 키워드는 해당 메소드를 포함하고 있는 객체를 가리킴
객체 내부에서 사용된 this 키워드는 객체 그 자신을 가리킴
*/
function Dog(color,name,age){
    this.color=color;
    this.name=name;
    this.age=age;
}
var myDog=new Dog("흰색","마루",1);
delete myDog.age; //age 프로퍼티 삭제
document.getElementById('dog').innerHTML="우리 집 강아지의 나이는 "+myDog.age+"입니다.";
//age 프로퍼티가 삭제되어서 undefined 출력

/*객체 프로퍼티 순회 
1.for/in문
2.Object.keys()
3.Object.getOwnPropertyNames()
*/
function Person(name,age,address){
    this.name=name;
    this.age=age;
    this.address=address;
}
var person = new Person("홍길동",24,"서울시 용산구");
Object.defineProperty(person,'age',{enumerable:false}); //age 프로퍼티의 enumerable 속성을 false로 설정
document.getElementById('key').innerHTML=Object.keys(person);//객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티 이름을 배열에 담아 반환함
document.getElementById('get').innerHTML=Object.getOwnPropertyNames(person);//객체가 가진 고유 프로퍼티의 이름을 배열에 담아 반환함

var p1= new Person("정약용",45,"서울시 마포구");
var p2= new Person("정약용",45,"서울시 마포구");//모든 프로퍼티의 값이 모두 같은 객체
document.getElementById('person').innerHTML=(p1==p2)+"<br>";
document.getElementById('person').innerHTML+=(p1===p2)+"<br>";//값이 같아도 서로 다른 객체기 때문에 false
var p3 =p2; //p2 객체를 변수 p3에 대입함 ->객체 레퍼런스
//변수 p3은 p2 객체를 가리킴(객체가 위치한 주소를 저장함)
document.getElementById('person').innerHTML+=(p2==p3)+"<br>";
document.getElementById('person').innerHTML+=(p2===p3);//true
