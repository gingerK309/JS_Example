var cat="나비";
var kitty={name:"나비", family:"코리안 숏 헤어",age:1,weight:0.1};
document.getElementById('cat').innerHTML=cat+"<br>";
document.getElementById('cat').innerHTML+=kitty.name;

var person={
    name:"홍길동",
    birth: "030219",
    pid: "1234567",
    fullId: function(){
        return this.birth+this.pid;
    }
};
document.getElementById('person').innerHTML=person.name+"<br>";
document.getElementById('person').innerHTML+=person["name"];
document.getElementById('method').innerHTML=person.fullId()+"<br>";
document.getElementById('method').innerHTML+=person.fullId;
//괄호(())를 붙이지 않으면, 메소드가 아닌 프로퍼티 그 자체를 참조,해당 메소드의 정의 그 자체가 반환