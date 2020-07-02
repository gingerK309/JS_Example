var x=true,y=false;
res=(x&&y);
document.getElementById("res").innerHTML=res+"<br>"; 
res=(x||y);
document.getElementById("res").innerHTML+=res+"<br>"; 
res= (!x);
document.getElementById("res").innerHTML+=res; 