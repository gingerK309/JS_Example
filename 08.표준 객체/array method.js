/*
 Array.prototype 메소드
1. 원본 배열을 변경하는 메소드
-push(): 요소를 마지막 인덱스 다음에 추가
-pop(): 마지막 요소를 제거
-shift(): 첫 요소를 제거
-unshift(): 요소를 배열의 가장 앞에 추가
-reverse(): 배열 요소의 순서를 전부 반대로 교체
-sort(): 배열 요소를 알파벳 순서에 따라 정렬 
-splice(): 기존의 배열 요소를 제거하거나 새로운 배열 요소를 추가하여 배열의 내용을 변경

2. 원본 배열은 변경하지 않고 참조만 하는 메소드
-join(): 배열의 모든 요소를 하나의 문자열로 반환, 인수로 전달받은 문자열을 구분자로 사용함
-slice(): 전달 받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소 추출 후 새로운 배열 반환
-concat(): 해당 배열 뒤에 인수로 전달 받은 배열을 합쳐 새로운 배열을 반환
-toString(): 해당 배열의 모든 요소를 하나의 문자열로 반환, 요소 사이에는 쉼표
3. 원본 배열을 반복적으로 참조하는 메소드
-forEach(): 모든 요소에 대해 반복적으로 명시된 콜백 함수 실행
-map(): 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 실행 결과를 새로운 배열에 담아 반환
-filter(): 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 true인 요소들만을 새로운 배열에 담아 반환
-every(): 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 모두 true일 때에만 true를 반환
-some(): 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 하나라도 true이면 true를 반환
-reduce(): 모든 요소를 하나의 값으로 줄이기 위해, 두 개의 인수를 전달받는 콜백 함수를 실행
-reduceRight(): reduce() 메소드와 같은 방식으로 실행되며, 배열의 마지막 요소부터 줄이기 시작
-entries(): 배열 요소별로 키(key)와 값(value)의 한 쌍으로 이루어진 새로운 배열 반복자 객체(Array Iterator Object)를 배열 형태로 반환
 키에는 인덱스, 값은 요소 값이 저장
-keys()
-values()
 */

 var arr= [1,true,"javascript"];
 document.getElementById('push').innerHTML= arr.length+"<br>";
 arr.push("자바");
 document.getElementById('push').innerHTML+=arr.length+"<br>";
 document.getElementById('push').innerHTML+= arr+"<br><br>";

 arr.push(2,"거짓");
 document.getElementById('push').innerHTML+=arr.length+"<br>";
 document.getElementById('push').innerHTML+=arr;

 document.getElementById('pop').innerHTML=arr.length+"<br>";
 document.getElementById('pop').innerHTML+=arr.pop()+"<br>";
 document.getElementById('pop').innerHTML+=arr.length+"<br>";
 document.getElementById('pop').innerHTML+=arr.pop()+"<br>";
 document.getElementById('pop').innerHTML+=arr+"<br>";
 document.getElementById('pop').innerHTML+=arr.length;

 document.getElementById('shift').innerHTML=arr.shift()+"<br>";
 document.getElementById('shift').innerHTML+=arr.length+"<br>";
 document.getElementById('shift').innerHTML+=arr.shift()+"<br>";
 document.getElementById('shift').innerHTML+=arr.length+"<br>";
 document.getElementById('shift').innerHTML+=arr;

 
 document.getElementById('unshift').innerHTML=arr.length+"<br>";
 arr.unshift("Html");
 document.getElementById('unshift').innerHTML+=arr.length+"<br>";
 document.getElementById('unshift').innerHTML+=arr+"<br><br>";

 arr.unshift(2,"거짓");
 document.getElementById('unshift').innerHTML+=arr.length+"<br>";
 document.getElementById('unshift').innerHTML+=arr;
 
 document.getElementById('reverse').innerHTML=arr.reverse();

var strArr=["로마","나라","감자","다람쥐"];
var numArr=[10,21,1,2,3];

document.getElementById('sort').innerHTML=strArr.sort()+"<br>";
document.getElementById('sort').innerHTML+=numArr.sort();//각 자릿수 별로 비교된 후 정렬됨

var removeElement = arr.splice(1,2,false,"c 언어");//인덱스 1부터 2개의 요소를 제거한 후, flase와 C 언어를 대신 집어넣음
document.getElementById('splice').innerHTML=arr+"<br>";
document.getElementById('splice').innerHTML+=removeElement; 

document.getElementById('join').innerHTML=arr.join()+"<br>";
document.getElementById('join').innerHTML+=arr.join(' + ')+"<br>";
document.getElementById('join').innerHTML+=arr.join(' ')+"<br>";
document.getElementById('join').innerHTML+=arr.join('');

document.getElementById('slice').innerHTML=arr.slice(1,3)+"<br>";
document.getElementById('slice').innerHTML+=arr.slice(1);


document.getElementById('concat').innerHTML=arr.concat([5,"자바",true])+"<br>";
document.getElementById('concat').innerHTML+=arr.concat([100],[3,4])+"<br>";
document.getElementById('concat').innerHTML+=arr.concat("다섯",[6,7]);

document.getElementById('str').innerHTML=arr.toString()+"<br>";

function pirntArr(value,index,array){
    document.getElementById('foreach').innerHTML+="arr["+index +"] = "+value+"<br>";
}
arr.forEach(pirntArr); //배열의 arr 요소 마다 printArr() 함수가 호출됨

var map=[1,-2,3,-4];
var absoluteValues = map.map(Math.abs);//배열 map의 각 요소마다 Math.abs() 함수가 호출되고 결과값이 배열로 저장됨
document.getElementById('map').innerHTML=absoluteValues;

var int=[-10,5,100,-20,40];

function compareValue(value){
    return value<10;
}
var lessTen=int.filter(compareValue);
document.getElementById('filter').innerHTML=lessTen;

int=[-10,5,-20,4];
document.getElementById('every').innerHTML=int.every(compareValue);

int=[10,25,-20,14];
document.getElementById('some').innerHTML=int.some(compareValue);

function subOfValues(x,y){
    return x-y;
}
document.getElementById('reduce').innerHTML=numArr.reduce(subOfValues);
document.getElementById('reduceR').innerHTML=numArr.reduceRight(subOfValues);

var arrEntries=arr.entries();
for(var entry of arrEntries){
    document.getElementById('entry').innerHTML+="["+entry+"]"+"<br>";
}//배열의 인덱스 별로 키-값 쌍 출력

