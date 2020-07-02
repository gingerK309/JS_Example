var x=10,y= 10;
res=++x-3; //x값을 우선 증가 시키고 3을 뺌
document.getElementById("result").innerHTML= res+"<br>";
res= x;//11
document.getElementById("result").innerHTML += res+"<br>";
res= y++ -3; //y에서 3을 뺀 다음에 y값을 1 증가시킴
document.getElementById("result").innerHTML+= res+"<br>";
res =y;//11
document.getElementById("result").innerHTML+= res;

var a=10;
var b= a--+5+ --a;
document.getElementById("res").innerHTML= a+"<br>";
document.getElementById("res").innerHTML+=b;