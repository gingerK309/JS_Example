/*
미리 정의된 전역 함수
1. eval(): 문자열로 표현된 자바스크립트 코드 실행
2. isFinite(): 전달된 값이 유한한 수인지를 검사하여 결과를 반환
3. isNaN(): 전달된 값이 NaN 인지 검사
4. parseFloat(): 문자열 파싱 후 부동 소수점으로 반환
5. parseInt(): 문자열 파싱 후 정수로 반환
6. decodeURI(): encodeURI()함수나 다른 방법으로 만들어진 URI 해독
7. decodeURIComponent(): URI 컴포넌트 해독
8. encodeURI(): 주소를 표시하는 특수문자를 제외하고 모든 문자를 이스케이프 시퀀스 처리하여 부호화함
9. encodeURIComponent(): encodeURI() 함수에서 부호화하지 않은 모든 문자까지 포함하여 이스케이프 시퀀스 처리
10. escape(): 특정 문자를 16진법 이스케이프 시퀀스 문자로 변환
11. unescape(): 16진법 이스케이프 시퀀스 문자를 원래의 문자로 변환
12. Number(): 전달받은 객체의 값을 숫자로 반환
13. String(): 전달받은 객체의 값을 문자열로 반환
*/
var x=10,y=20;
var a= eval("x+y");
var b= eval("y*3");
document.getElementById('eval').innerHTML=a+"<br>"+b;

document.getElementById('is').innerHTML=isFinite(123)+"<br>";
document.getElementById('is').innerHTML+=isFinite(123e100)+"<br>";
document.getElementById('is').innerHTML+=isFinite(0)+"<br>";
document.getElementById('is').innerHTML+=isFinite(true)+"<br>";
document.getElementById('is').innerHTML+=isFinite(false)+"<br>";
document.getElementById('is').innerHTML+=isFinite(null)+"<br>";
document.getElementById('is').innerHTML+=isFinite("123")+"<br>";
document.getElementById('is').innerHTML+=isFinite("")+"<br>";
document.getElementById('is').innerHTML+=isFinite("문자열")+"<br>";
document.getElementById('is').innerHTML+=isFinite(undefined)+"<br>";
document.getElementById('is').innerHTML+=isFinite(NaN);

document.getElementById('nan').innerHTML=isNaN(123)+"<br>";
document.getElementById('nan').innerHTML+=isNaN(123e100)+"<br>";
document.getElementById('nan').innerHTML+=isNaN(0)+"<br>";
document.getElementById('nan').innerHTML+=isNaN(true)+"<br>";
document.getElementById('nan').innerHTML+=isNaN(false)+"<br>";
document.getElementById('nan').innerHTML+=isNaN(null)+"<br>";
document.getElementById('nan').innerHTML+=isNaN("123")+"<br>";
document.getElementById('nan').innerHTML+=isNaN("")+"<br>";
document.getElementById('nan').innerHTML+=isNaN("문자열")+"<br>";
document.getElementById('nan').innerHTML+=isNaN(undefined)+"<br>";
document.getElementById('nan').innerHTML+=isNaN(NaN);

document.getElementById('pf').innerHTML=parseFloat("123")+"<br>";
document.getElementById('pf').innerHTML+=parseFloat("123.000")+"<br>";
document.getElementById('pf').innerHTML+=parseFloat("123.456")+"<br>";
document.getElementById('pf').innerHTML+=parseFloat("12 34 56")+"<br>";
document.getElementById('pf').innerHTML+=parseFloat(" 123 ")+"<br>";
document.getElementById('pf').innerHTML+=parseFloat("123 초콜릿")+"<br>";
document.getElementById('pf').innerHTML+=parseFloat("초콜릿 123");

document.getElementById('pi').innerHTML=parseInt("123")+"<br>";
document.getElementById('pi').innerHTML+=parseInt("123.000")+"<br>";
document.getElementById('pi').innerHTML+=parseInt("123.456")+"<br>";
document.getElementById('pi').innerHTML+=parseInt("12 34 56")+"<br>";
document.getElementById('pi').innerHTML+=parseInt(" 123  ")+"<br>";
document.getElementById('pi').innerHTML+=parseInt("123 초콜릿")+"<br>";
document.getElementById('pi').innerHTML+=parseInt("초콜릿 123")+"<br>";
document.getElementById('pi').innerHTML+=parseInt("10",10)+"<br>";
document.getElementById('pi').innerHTML+=parseInt("10",8)+"<br>";
document.getElementById('pi').innerHTML+=parseInt("10",16)+"<br>";
document.getElementById('pi').innerHTML+=parseInt("0x10")+"<br>";

var uri="http://google.com/search.php?name=홍길동&city=서울";
var enc1=encodeURI(uri);
var enc2=encodeURIComponent(uri)
document.getElementById('uri').innerHTML=enc1+"<br><br>";
document.getElementById('uri').innerHTML+=enc2;

var dec1= decodeURI(enc1);
var dec2=decodeURIComponent(enc2);
document.getElementById('dec').innerHTML=dec1+"<br><br>";
document.getElementById('dec').innerHTML+=dec2;

var str="Hello world ?#$";
var esc= escape(str);
var une= unescape(esc);
document.getElementById('esc').innerHTML=esc+"<br>"+une;

document.getElementById('num').innerHTML=Number("123")+"<br>";
document.getElementById('num').innerHTML+=Number("123.000")+"<br>";
document.getElementById('num').innerHTML+=Number("123.456")+"<br>";
document.getElementById('num').innerHTML+=Number("12 34 56")+"<br>";
document.getElementById('num').innerHTML+=Number("123 초콜릿")+"<br>";
document.getElementById('num').innerHTML+=Number(true)+"<br>";
document.getElementById('num').innerHTML+=Number(false)+"<br>";
document.getElementById('num').innerHTML+=Number(new Date())+"<br>";
document.getElementById('num').innerHTML+=Number(null);

document.getElementById('str').innerHTML=String(123)+"<br>";
document.getElementById('str').innerHTML+=String(123.456)+"<br>";
document.getElementById('str').innerHTML+=String("123")+"<br>";
document.getElementById('str').innerHTML+=String(true)+"<br>";
document.getElementById('str').innerHTML+=String(false)+"<br>";
document.getElementById('str').innerHTML+=String(new Date())+"<br>";
document.getElementById('str').innerHTML+=String(null)+"<br>";
document.getElementById('str').innerHTML+=String(Boolean(1))+"<br>";
document.getElementById('str').innerHTML+=String(Boolean(0))+"<br>";