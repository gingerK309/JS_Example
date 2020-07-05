/*
1. String.fromCharCode(): 쉼표로 구분되는 유니코드에 해당하는 문자들로 구성된 문자열을 반환
2. String.fromCodePoint(): 쉼표로 구분되는 코드 포인트에 해당하는 문자들로 구성된 문자열을 반환
 */

document.getElementById('code').innerHTML=String.fromCharCode(65,66,67)+"<br>";
document.getElementById('code').innerHTML+=String.fromCodePoint(65,66,67)+"<br>";
document.getElementById('code').innerHTML+=String.fromCodePoint(0x2F804)+"<br>";
document.getElementById('code').innerHTML+=String.fromCodePoint(194564);

/*
String 인스턴스는 String.prototype으로부터 메소드와 프로퍼티를 상속받음
1. 문자열에서의 위치 반환: String 인스턴스에서 특정 문자나 문자열이 처음으로 등장하는 위치나 마지막으로 등장하는 위치를 반환
-indexOf()
-lastIndexOf()
2. 문자열에서 지정된 위치에 있는 문자 반환: String 인스턴스에서 전닯다은 인덱스에 위치한 문자나 문자 코드를 반환
- charAt()
- charCodeAt()
- charPointAt()
3. 문자열 추출: String 인스턴스에서 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 문자열을 추출하여 반환
- slice()
- substring()
- substr()
4. 문자열 분리:  String 인스턴스를 구분자(separator)를 기준으로 나눈 후, 나뉜 문자열을 하나의 배열로 반환
- split(): 구분자를 전달 하지 않으면 길이가 1인 전체 문자열을 반환 
5. 문자열 결합: String 인스턴스에 전달받은 문자열을 결합한 새로운 문자열을 반환
- concat()
6. 문자열의 대소문자 변환: String 인스턴스의 모든 문자를 대문자나 소문자로 변환한 후 반환
- toUpperCase()
- toLowerCase()
7. 문자열 주위의 공백 제거: String 인스턴스의 양 끝에 존재하는 모든 공백과 줄 바꿈 문자(LF, CR 등)를 제거한 새로운 문자열을 반환
-trim()
8. 정규 표현식을 이용한 문자열 조작: 인수로 전달받은 정규 표현식을 이용하여, String 인스턴스 값에서 검색, 대조, 대체 등의 작업을 수행
- search()
- match()
- replace()
 */
var str="abcDEFabc";
document.getElementById('idx').innerHTML=str.indexOf('abc')+"<br>";
document.getElementById('idx').innerHTML+=str.indexOf('abcd')+"<br>";
document.getElementById('idx').innerHTML+=str.indexOf('abc',3)+"<br><br>";

document.getElementById('idx').innerHTML+=str.lastIndexOf('abc')+"<br>";
document.getElementById('idx').innerHTML+=str.lastIndexOf('d')+"<br>";
document.getElementById('idx').innerHTML+=str.lastIndexOf('c');

document.getElementById('at').innerHTML=str.charAt(0)+"<br>";
document.getElementById('at').innerHTML+=str.charAt(10)+"<br>";//빈 문자열
document.getElementById('at').innerHTML+=str.charCodeAt(0)+"<br>";
document.getElementById('at').innerHTML+=str.codePointAt(0);

str="안녕하세요. 저는 홍길동 입니다.";
document.getElementById('slice').innerHTML=str.slice(2,6)+"<br>";
document.getElementById('slice').innerHTML+=str.slice(-4,-2)+"<br>";
document.getElementById('slice').innerHTML+=str.slice(2)+"<br>";
document.getElementById('slice').innerHTML+=str.substring(0,6)+"<br>";
document.getElementById('slice').innerHTML+=str.substr(1,4);

str="자바 스크립트는 아주 fun 하고! cool 하고! sexy 합니다.";
document.getElementById('split').innerHTML="["+str.split()+"]"+"<br>";//아무 동작도 하지 않음
document.getElementById('split').innerHTML+="["+str.split("")+ "]" + "<br>";//한 문자씩 나눔
document.getElementById('split').innerHTML+="["+str.split(" ")+"]" +"<br>";//공백 기준으로 나눔
document.getElementById('split').innerHTML+="["+str.split("!")+"]" +"<br>";//느낌표를 기준으로 나눔

str="자바스크립트";
document.getElementById('con').innerHTML=str+"<br>";
document.getElementById('con').innerHTML+=str.concat("는 너무 fun해요!")+"<br>";
document.getElementById('con').innerHTML+=str.concat("는 너무 fun해요! 그리고 sexy 해요!")+"<br>";
document.getElementById('con').innerHTML+=str;

str="JavaScript";
document.getElementById('char').innerHTML=str.toUpperCase()+"<br>";
document.getElementById('char').innerHTML+=str.toLowerCase();

str="       JavaScr ipt      ";
document.getElementById('trim').innerHTML=str.trim();