var arrLit=[1,true,"JavaScript"];//배열 리터럴
var arrObj=Array(1,true,"JavaScript");//Array 객체의 생성자
var arrNewObj= new Array(1,true,"JavaScript");//new 연산자를 통한 Array 객체 생성

document.getElementById("arr").innerHTML=arrLit+"<br>";
document.getElementById("arr").innerHTML+=arrObj+"<br>";
document.getElementById("arr").innerHTML+=arrNewObj;

var arr=["JavaScript"];
var element= arr[0];
arr[1]=10;
arr[2]=element;
document.getElementById("index").innerHTML="배열 arr의 요소에는 ["+arr+"] 가 있습니다.<br>";
document.getElementById("index").innerHTML+="배열 arr의 길이는 "+arr.length+"입니다.<br>";
delete arr[2];
document.getElementById("index").innerHTML+="배열 arr의 요소에는 ["+arr+"] 가 있습니다.<br>";
document.getElementById("index").innerHTML+="배열 arr의 길이는 "+arr.length+"입니다.<br>";

var arr=[1,true,"java"];
arr.push("Script");
document.getElementById("push").innerHTML=arr+"<br>";
arr[arr.length]=100;
document.getElementById("push").innerHTML+=arr+"<br>";
arr[10]="자바스크립트";
document.getElementById("push").innerHTML+=arr+"<br>";
document.getElementById("push").innerHTML+=arr[7];

var result="<table><tr>"
for (var idx in arr){
    result+="<td>"+arr[idx]+"</td>";
}
result+="</tr></table>";
document.getElementById("table").innerHTML+=result;


var arr=new Array(10,"문자열",false);
document.getElementById("obj").innerHTML=(typeof arr)+"<br>";
document.getElementById("obj").innerHTML+=(typeof arr[0])+"<br>";
document.getElementById("obj").innerHTML+=(typeof arr[1])+"<br>";
document.getElementById("obj").innerHTML+=(typeof arr[2]);