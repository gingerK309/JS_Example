/* 
1. Math.min()
2. Math.max()
3. Math.random()
4. Math.round()
5. Math.floor()
6. Math.ceil()
7. Math.sin()
*/

document.getElementById('min').innerHTML=Math.min()+"<br>";
document.getElementById('min').innerHTML+=Math.min(1,10,-100,-10,1000,0)+"<br>";
document.getElementById('min').innerHTML+=Math.min(1,10,-100,-10,"-1000",0)+"<br>";
document.getElementById('min').innerHTML+=Math.min(1,10,-100,-10,"문자열",0);

document.getElementById('max').innerHTML=Math.max()+"<br>";
document.getElementById('max').innerHTML+=Math.max(1,10,-100,-10,100,0)+"<br>";
document.getElementById('max').innerHTML+=Math.max(1,10,-100,-10,"1000",0)+"<br>";
document.getElementById('max').innerHTML+=Math.max(1,10,-100,-10,"문자열",0);

var min=10,max=20;
document.getElementById('random').innerHTML=Math.random()+"<br>";
document.getElementById('random').innerHTML+=Math.random()*(max-min)+min+"<br>";

document.getElementById('round').innerHTML=Math.round(10.49)+"<br>";
document.getElementById('round').innerHTML+=Math.round(10.5)+"<br>";
document.getElementById('round').innerHTML+=Math.round(-10.5)+"<br>";
document.getElementById('round').innerHTML+=Math.round(-10.51);

document.getElementById('floor').innerHTML=Math.floor(10.95)+"<br>";
document.getElementById('floor').innerHTML+=Math.floor(11.01)+"<br>";
document.getElementById('floor').innerHTML+=Math.floor(-10.95)+"<br>";
document.getElementById('floor').innerHTML+=Math.floor(-11.01);

document.getElementById('ceil').innerHTML=Math.ceil(10.95)+"<br>";
document.getElementById('ceil').innerHTML+=Math.ceil(11.01)+"<br>";
document.getElementById('ceil').innerHTML+=Math.ceil(11)+"<br>";
document.getElementById('ceil').innerHTML+=Math.ceil(-10.95)+"<br>";
document.getElementById('ceil').innerHTML+=Math.ceil(-11.01);

document.getElementById('sin').innerHTML=Math.sin(0)+"<br>";
document.getElementById('sin').innerHTML+=Math.sin(Math.PI/2);