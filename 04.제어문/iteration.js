var i=1;
while(i<10){
    document.getElementById("loop").innerHTML+= i+"<br>";
    i++;
}
i=1;
var j=1;
while(i>3){ //i의 초기값 1이므로 실행되지 않음
    document.getElementById("loop2").innerHTML+= "i: "+(i++)+"<br>";
}
do{ //초기값 1이라서 한번만 실행
    document.getElementById("loop3").innerHTML+= "j: "+(j++)+"<br>";
}while(j>3);

for(var i=1;i<10;i++){
    document.getElementById("for").innerHTML+= i +"<br>";
}

var arr=[3,4,5];
for(var i=0;i<arr.length;i++){//배열 arr 요소의 인덱스 출력
    document.getElementById("enum").innerHTML+= i +" ";
}
 for( var i in arr){ //같은 의미의 for/in 문
   document.getElementById("forin").innerHTML+= i + " ";
 }

 var obj={
     name:"홍길동",
     age: 23,
     address: "서울시 용산구"
 };
 for(var i in obj){
     document.getElementById("obj").innerHTML+= i +"<br>";
 }

 for(var i=0; i<arr.length;i++){ //배열 arr 요소값을 출력
    document.getElementById("arr").innerHTML+= arr[i]+" ";
 }
 for(var value of arr){ //같은 의미의 for/of 문
  document.getElementById("forof").innerHTML+=value+" ";
 }

var set = new Set([1,1,2,2,3,3,4]);
for(var value of set){
    document.getElementById("set").innerHTML+= value + " ";
}