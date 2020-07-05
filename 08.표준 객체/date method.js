var nowMiliSec=Date.now(); /// 1970년 1월 1일 00:00:00부터 현재까지의 밀리초
document.getElementById('now').innerHTML=nowMiliSec+"<br>";
document.getElementById('now').innerHTML+=new Date(nowMiliSec)+"<br>";
document.getElementById('now').innerHTML+=new Date();

/*
Date 인스턴스는 Date.prototype으로부터 메소드와 프로퍼티를 상속받음
Date.prototype getter 메소드는 날짜와 관련된 정보를 받아오기 위한 메소드
1. getFullYear()
2. getDate()
3. getDay()
4. getTime()
*/

var date =new Date();
document.getElementById('year').innerHTML="올해는 "+date.getFullYear()+"년입니다.";
document.getElementById('day').innerHTML="오늘은 "+(date.getMonth()+1)+"월 "+date.getDate()+"일입니다.<br>";

var day;
switch(date.getDay()){
    case 0:
        day="일";
    break;
    case 1:
        day="월";
    break;
    case 2:
        day="화";
    break;
    case 3:
        day="수";
    break;
    case 4:
        day="목";
    break;
    case 5:
        day="금"
    break;
    case 6:
        day="토"
    break;
}
document.getElementById('Day').innerHTML="오늘은 "+day+"요일입니다.<br>";

var days=["일","월","화","수","목","금","토","일"];
document.getElementById('Day').innerHTML+="오늘은 "+day+"요일입니다.";

var period = date.getTime()/86400000;
document.getElementById('period').innerHTML="1970년 1월 1일 부터 오늘까지 "+ period.toFixed()+"일이 지났습니다.";


/*
Date.prototype setter 메소드는 날짜와 관련된 정보를 설정하기 위한 메소드
1. setFullYear()
2. setDate()
*/
date.setFullYear(1982,1,19);
document.getElementById('set').innerHTML=date.getFullYear()+"<br>";
document.getElementById('set').innerHTML+=(date.getMonth()+1)+"<br>";
document.getElementById('set').innerHTML+=date.getDate()+"<br>";
document.getElementById('set').innerHTML+=date;

date=new Date();
date.setDate(10);
document.getElementById('date').innerHTML=date+"<br>"; //Date 객체의 일자 값을 10일로 설정함
date.setDate(40);
document.getElementById('date').innerHTML+=date;//40일을 설정하면, 초과되는 일수만큼 다음달로 넘어감



