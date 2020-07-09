/*
특수 문자: 숫자만을 검색하거나, 띄어쓰기를 찾는 등 정확히 일치하는 패턴보다 더 복잡한 조건을 사용
양화사:  특수 문자로 수량을 나타냄
n*:	바로 앞의 문자가 0번 이상 나타나는 경우를 검색함. /{0, }/와 같음
n+:	바로 앞의 문자가 1번 이상 나타나는 경우를 검색함. /{1, }/과 같음
n?:	바로 앞의 문자가 0번 또는 1번만 나타나는 경우를 검색함. /{0,1}/과 같음
*/
var exp=document.getElementById('exp');
var targetStr="ab1bc2cd3de";
var reg1=/\d/; //0 부터 9 까지 숫자 검색
var reg2=/[3-9]/; //3부터 9까지 숫자 검색

exp.innerHTML=targetStr.search(reg1)+"<br>"+targetStr.search(reg2);

//match() 메소드는 해당 문자열에서 인수로 전달받은 정규 표현식과 일치하는 문자열을 모두 찾아서 하나의 배열로 반환해주는 자바스크립트의 String 메소드

exp=document.getElementById('exp2');
targetStr="abc 123";
var reg=/\w\s\w/; //공백 문자를 사이에 두는 _를 포함한 영문자 및 숫자로 이루어진 문자열을 검색
exp.innerHTML=targetStr.match(reg);//c 1 (공백 문자를 사이에 두는)

exp=document.getElementById('exp3');
var targetStr1="abc123abc";//전부 한 문자로 인식
var targetStr2="abc 123 abc"//세 문자로 인식(abc 랑 123 이랑 abc)
var targetStr3="abc@123!abc"//세 문자로 인식

reg=/bc\b/;// 단어의 맨 앞이나 맨 뒤에 부분 문자열 "bc"가 존재하는지를 검색함.

exp.innerHTML=targetStr1.search(reg)+"<br>"+
targetStr2.search(reg)+"<br>"+targetStr3.search(reg);

targetStr="Hello World!";
var zeroReg=/lo*/; //문자 'l' 다음에 문자 'o'가 0번 이상 나타나는 경우를 검색함
var oneReg=/lo+/; //문자 'l' 다음에 'o'가 1번 이상 나타나는 경우를 검색함
var zeroOneReg= /lo?/; //문자 'l' 다음에 문자 'o'가 0또는 1번만 나타나는 경우를 검색함

document.getElementById('exp4').innerHTML=
targetStr.search(zeroReg)+"<br>"+targetStr.search(oneReg)+"<br>"+
targetStr.search(zeroOneReg);

targetStr="123abc";
oneReg=/\d+/; //숫자 검색 [0-9]
var anotherReg = /\d+?/ //숫자를 검색하지만 가능한 적은 수의 문자를 갖는 패턴을 검색
document.getElementById('exp5').innerHTML=
targetStr.match(oneReg)+"<br>"+targetStr.match(anotherReg);

targetStr="Hong Gil Dong";
var nameReg=/(\w+)\s(\w+)\s(\w+)/;//공백 문자를 기준으로 각 부분 문자열 저장
var engName=targetStr.replace(nameReg, "$2 $3 $1");//첫 번째 부분 문자열을 맨 마지막으로 위치
document.getElementById('exp6').innerHTML=engName;

targetStr="abc 123 abc 123";
oneReg=/(\w+) (\d+)/; //abc 123, abc, 123
anotherReg = /(\w+) (\d+) \1 \2/; //abc 123 abc 123, abc, 123
document.getElementById('exp7').innerHTML =
targetStr.match(oneReg)+"<br>"+targetStr.match(anotherReg);
//match() 메소드는 정규 표현식과 모두 일치하는 부분 문자열뿐만 아니라, 괄호를 사용하여 저장된 부분 문자열도 함께 반환

var firstStr="Php";
var secondStr="phP";
var thirdStr="php"
var strReg=/^p/; //단어의 맨 처음에 문자 'p'가 나타나는 경우를 검색
var strReg2=/p$/;//단어의 맨 끝에 문자 'p'가 나타나는 경우를 검색
document.getElementById('exp8').innerHTML=firstStr.match(strReg)
+"<br>"+secondStr.match(strReg)+"<br>"+thirdStr.match(strReg2);