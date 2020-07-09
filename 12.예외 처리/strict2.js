str="문자열";//선언되지 않은 변수를 사용해도 자동으로 전역 변수로 선언됨
document.getElementById('noStrict').innerHTML= str+"<br>";
function StrictBlock(){
 "use strict" //함수 블록을 strict 로 선언
 try{
     num= 123;
 }catch(error){
     document.getElementById('funcStrict').innerHTML=error.name+"<br>";
     document.getElementById('funcStrict').innerHTML+=error.message;
     
 }
}
StrictBlock();