var x=999999999999999;
var y=9999999999999999;
var z= 0.1 + 0.2;
document.getElementById('float').innerHTML=x+"<br>";
document.getElementById('float').innerHTML+=y+"<br>";
document.getElementById('float').innerHTML+=z;

x=0xAB;//171
y=29;
document.getElementById('hex').innerHTML=x+y;//산술 연산 시 10진수로 자동 변환

var num=256;
document.getElementById('num').innerHTML=num.toString(2)+"<br>";
document.getElementById('num').innerHTML+=num.toString(8)+"<br>";
document.getElementById('num').innerHTML+=num.toString(10)+"<br>";
document.getElementById('num').innerHTML+=num.toString(16)+"<br>";
document.getElementById('num').innerHTML+=(num.toString(2)/2);

x=10/0; //숫자를 0으로 나누면 infinity
y=Infinity*1000;
z= 1/ Infinity;

document.getElementById('inf').innerHTML=x+"<br>";
document.getElementById('inf').innerHTML+=y+"<br>";
document.getElementById('inf').innerHTML+=z;

x=100-"10";
y=100-"문자열";
z= 0/0;

document.getElementById('nan').innerHTML=x+"<br>";
document.getElementById('nan').innerHTML+=y+"<br>";
document.getElementById('nan').innerHTML+=z;

x= 100*"문자열";
if(isNaN(x)){
    document.getElementById('isnan').innerHTML="변수 x의 값은 숫자가 아닙니다.";
}else document.getElementById('isnan').innerHTML="변수 x의 값은 숫자입니다.";

document.getElementById('nuni').innerHTML=typeof null +"<br>";
document.getElementById('nuni').innerHTML+=typeof undefined +"<br>";
document.getElementById('nuni').innerHTML+=typeof NaN +"<br>";
document.getElementById('nuni').innerHTML+=typeof Infinity +"<br><br>";

document.getElementById('nuni').innerHTML+=Boolean(null) +"<br>";
document.getElementById('nuni').innerHTML+=Boolean(undefined) +"<br>";
document.getElementById('nuni').innerHTML+=Boolean(NaN) +"<br>";
document.getElementById('nuni').innerHTML+=Boolean(Infinity) +"<br><br>";

document.getElementById('nuni').innerHTML+=Number(null) +"<br>";
document.getElementById('nuni').innerHTML+=Number(undefined) +"<br>";
document.getElementById('nuni').innerHTML+=Number(NaN) +"<br>";
document.getElementById('nuni').innerHTML+=Number(Infinity) +"<br><br>";

document.getElementById('nuni').innerHTML+=String(null) +"<br>";
document.getElementById('nuni').innerHTML+=String(undefined) +"<br>";
document.getElementById('nuni').innerHTML+=String(NaN) +"<br>";
document.getElementById('nuni').innerHTML+=String(Infinity) +"<br>";

x=100;
y= new Number(100);//래퍼 객체
document.getElementById('obj').innerHTML=x+"<br>";
document.getElementById('obj').innerHTML+=y+"<br>";
document.getElementById('obj').innerHTML+=typeof x+"<br>";
document.getElementById('obj').innerHTML+=typeof y+"<br>";
document.getElementById('obj').innerHTML+=(x==y)+"<br>";
document.getElementById('obj').innerHTML+=(x===y);//서로 다른 객체

