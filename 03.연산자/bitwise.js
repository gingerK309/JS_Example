var x=15// 00001111
,y=-8// 10001000
,z=15;//00001111
document.getElementById("res").innerHTML=((x<<1)+"<br>");//0001 1110
document.getElementById("res").innerHTML+=((y>>1)+"<br>");//1000 0100
document.getElementById("res").innerHTML+=((y>>>1)+"<br>");//부호 비트까지 오른쪽으로 밈
document.getElementById("res").innerHTML+=(~z);//1111 0000