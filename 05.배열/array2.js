var arr= new Array();//빈 배열 객체 생성
arr[99]="javascript"//배열 arr의 100번째 위치에 문자열 삽입
document.getElementById("index").innerHTML="배열의 길이는 "+arr.length+"입니다.<br>";
//배열 길이 100으로 늘어남

arr= new Array(3);  //3개의 요소를 갖는 배열 생성
for(var row =0; row<3; row++){
    arr[row]=new Array(4); //각각의 요소마다 4개의 요소를 갖는 배열 생성
    for(var col=0;col<4;col++){
        arr[row][col]="["+row+","+col+"]"; //각각의 배열 요소를 생성
        document.getElementById("arr").innerHTML+=arr[row][col]+" ";
    }
    document.getElementById("arr").innerHTML+="<br>";
}

arr=[];
arr["하나"]=1; //숫자 인덱스 대신 문자열을 인덱스로 배열 요소를 추가 - 연관 배열
arr["참"]=true;
arr["자바스크립트"]="JavaScript";

document.getElementById("assa").innerHTML=arr["참"]+"<br>";
document.getElementById("assa").innerHTML+=arr.length+"<br>"; //0
document.getElementById("assa").innerHTML+=arr[0];

var str="안녕하세요?"; //문자열 읽기만 가능
document.getElementById("str").innerHTML=str.charAt(2)+"<br>";
document.getElementById("str").innerHTML+=str[3];

arr=[1,true,"JavaScript"];
document.getElementById("type").innerHTML=(typeof arr);
document.getElementById("isArr").innerHTML=Array.isArray(arr)+"<br>";
document.getElementById("isArr").innerHTML+= Array.isArray("hello");
document.getElementById("ins").innerHTML=(arr instanceof Array)+"<br>";
document.getElementById("ins").innerHTML+=(123 instanceof Array);

//constructor 프로퍼티
//문법: function Array() {[native code]}
function isArray(a){
    return a.constructor.toString().indexOf("Array")>-1;
}
document.getElementById("con").innerHTML=arr.constructor+"<br>";//constructor 프로퍼티 값 출력
document.getElementById("con").innerHTML+=arr.constructor.toString()+"<br>";
document.getElementById("con").innerHTML+=arr.constructor.toString().indexOf("Array")+"<br>";
document.getElementById("con").innerHTML+= isArray(arr);