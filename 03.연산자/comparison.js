var x=3,y=5;
var a="abc",b="bcd";
res= x>y;
document.getElementById("res").innerHTML= res+"<br>";
res= a<=b;
document.getElementById("res").innerHTML+=res+"<br>";
res= x<a;
document.getElementById("res").innerHTML+=res;

var i=3,j='3',k=3;
res = (i==j);
document.getElementById("res2").innerHTML= res+"<br>";
res = (i===j);
document.getElementById("res2").innerHTML+= res+"<br>";
res= (i===k);
document.getElementById("res2").innerHTML+=res;