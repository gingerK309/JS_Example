/*
Date 객체 초기화
1. new Date()
2. new Date("날짜를 나타내는 문자열")
3. new Date(밀리초)
4. new Date(년, 월, 일, 시, 분, 초, 밀리초)
*/
var date = new Date();
document.getElementById('date').innerHTML=date;

document.getElementById('Dday').innerHTML=new Date("December 14,1977 13:30:00")+"<br>";
document.getElementById('Dday').innerHTML+=new Date(80000000)+"<br>";
document.getElementById('Dday').innerHTML+=new Date(16,5,25)+"<br>";
document.getElementById('Dday').innerHTML+=new Date(16,5,25,15,40,0)+"<br>";
document.getElementById('Dday').innerHTML+=new Date(2014,5,3,14,32,7)+"<br>";

document.getElementById('iso').innerHTML=new Date("1977-12-14T13:30:00")+"<br>";
document.getElementById('iso').innerHTML+=new Date("1977-12-14")+"<br>";
document.getElementById('iso').innerHTML+=new Date("1977-12")+"<br>";
document.getElementById('iso').innerHTML+=new Date("1977")+"<br>";


document.getElementById('long').innerHTML=new Date("Feb 19 1982")+"<br>";
document.getElementById('long').innerHTML+=new Date("19 Feb 1982")+"<br>";
document.getElementById('long').innerHTML+=new Date("February 19 1982")+"<br>";
document.getElementById('long').innerHTML+=new Date("February,19,1982");

document.getElementById('short').innerHTML=new Date("02/19/1982")+"<br>";
document.getElementById('short').innerHTML+=new Date("1982/02/19");

document.getElementById('full').innerHTML=new Date("Wed May 25 2017 17:00:00 GMT+0900 (Seoul Time)")+"<br>";
document.getElementById('full').innerHTML+=new Date("Wed May 25 2017 17:00:00 GMT-0500 (New York Time)");