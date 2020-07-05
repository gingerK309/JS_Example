/*
Number method
1. Number.parseFloat(): 문자열에 포함된 숫자 부분을 실수 형태로 반환 
문자열에 여러 개의 숫자가 존재하면, 그중에서 첫 번째 숫자만을 실수 형태로 반환
2. Number.parseInt(): 문자열에 포함된 숫자 부분을 정수 형태로 반환
문자열에 여러 개의 숫자가 존재하면, 그중에서 첫 번째 숫자만을 정수 형태로 반환
3. Number.isNaN(): 전달된 값이 NaN인지 아닌지를 검사, NaN일 때만 true
4. Number.isFinite(): 전달된 값이 유한한 수인지 아닌지를 검사, 유한한 값에만 true 반환
5. Number.isInteger(): 전달된 값이 정수인지 아닌지를 검사, 정수일때만 true 반환
6. Number.isSafeInteger(): 전달된 값이 안전한 정수인지 검사, -(2^53 - 1)부터 (2^53 - 1)까지의 모든 정수

Number.prototype 메소드
1. Number.prototype.toExponential(): Number 인스턴스 값을 지수 표기법으로 변환 후 문자열로 반환
    numObj.toExponential([소수부분의자릿수])
2. Number.prototype.toFixed(): Number 인스턴스의 소수 부분 자릿수를 전달 받은 값으로 고정한 후 문자열로 반환
    numObj.toFixed([소수부분의자릿수])
3. Number.prototype.toPrecision(): Number 인스턴스의 가수와 소수 부분을 합친 자릿수를 전달 받은 값으로 고정하고 문자열로 반환
    numObj.toPrecision([전체자릿수])
4. Number.prototype.toString(): Number 인스턴스의 값을 문자열로 반환
    numObj.toString([진법])
5. Number.prototype.valueOf(): Number 인스턴스가 가지고 있는 값을 반환
    numObj.valueOf()


*/
document.getElementById('pf').innerHTML=Number.parseFloat("12")+"<br>";
document.getElementById('pf').innerHTML+=Number.parseFloat("12.34")+"<br>";
document.getElementById('pf').innerHTML+=Number.parseFloat("12문자열")+"<br>";
document.getElementById('pf').innerHTML+=Number.parseFloat("12 34 56")+"<br>";
document.getElementById('pf').innerHTML+=Number.parseFloat("문자열 56")+"<br>";

document.getElementById('pi').innerHTML=Number.parseInt("12")+"<br>";
document.getElementById('pi').innerHTML+=Number.parseInt("12.34")+"<br>";
document.getElementById('pi').innerHTML+=Number.parseInt("12문자열")+"<br>";
document.getElementById('pi').innerHTML+=Number.parseInt("12 34 56")+"<br>";
document.getElementById('pi').innerHTML+=Number.parseInt("문자열 56")+"<br>";

document.getElementById('nan').innerHTML=Number.isNaN(NaN)+"<br>";
document.getElementById('nan').innerHTML+=Number.isNaN(0/0)+"<br><br>";

//전역 함수 isNaN() 에서 잘못된 결과를 반환하는 예제
document.getElementById('nan').innerHTML+=isNaN("NaN")+"<br>";
document.getElementById('nan').innerHTML+=isNaN(undefined)+"<br>";
document.getElementById('nan').innerHTML+=isNaN("문자열")+"<br><br>"

//Number.isNaN() 메소드는 올바른 결과를 반환함
document.getElementById('nan').innerHTML+=Number.isNaN("NaN")+"<br>";
document.getElementById('nan').innerHTML+=Number.isNaN(undefined)+"<br>";
document.getElementById('nan').innerHTML+=Number.isNaN("문자열")+"<br>";


document.getElementById('fin').innerHTML=Number.isFinite(0)+"<br>";
document.getElementById('fin').innerHTML+=Number.isFinite(3e45)+"<br><br>";

document.getElementById('fin').innerHTML+=Number.isFinite(Infinity)+"<br>";
document.getElementById('fin').innerHTML+=Number.isFinite(NaN)+"<br><br>";

//전역 함수 isFinite() 에서 잘못된 결과를 반환하는 예제
document.getElementById('fin').innerHTML+=isFinite("0")+"<br>";
document.getElementById('fin').innerHTML+=isFinite(null)+"<br><br>";


//Number.isNaN() 메소드는 올바른 결과를 반환함
document.getElementById('fin').innerHTML+=Number.isNaN("0")+"<br>";
document.getElementById('fin').innerHTML+=Number.isNaN(null);

document.getElementById('int').innerHTML=Number.isInteger(0)+"<br>";
document.getElementById('int').innerHTML+=Number.isInteger(-100)+"<br><br>";

document.getElementById('int').innerHTML+=Number.isInteger(0.1)+"<br>";
document.getElementById('int').innerHTML+=Number.isInteger("문자열")+"<br>";
document.getElementById('int').innerHTML+=Number.isInteger(Infinity)+"<br>";
document.getElementById('int').innerHTML+=Number.isInteger(true);

document.getElementById('safe').innerHTML=Number.isSafeInteger(10)+"<br>";
document.getElementById('safe').innerHTML+=Number.isSafeInteger(Math.pow(2,53)-1)+"<br><br>";
document.getElementById('safe').innerHTML+=Number.isSafeInteger(Math.pow(2,53))+"<br>";
document.getElementById('safe').innerHTML+=Number.isSafeInteger(Infinity)+"<br>";
document.getElementById('safe').innerHTML+=Number.isSafeInteger(NaN)+"<br>";
document.getElementById('safe').innerHTML+=Number.isSafeInteger(3.14);

num=12.3456; //Number 인스턴스 생성
document.getElementById('num').innerHTML=num.toExponential()+"<br>";
document.getElementById('num').innerHTML+=num.toExponential(2)+"<br>";
document.getElementById('num').innerHTML+=num.toExponential(4)+"<br>";
document.getElementById('num').innerHTML+=12.3456.toExponential();

num = 3.14159265; 
document.getElementById('fix').innerHTML=num.toFixed()+"<br>";
document.getElementById('fix').innerHTML+=num.toFixed(2)+"<br>";
document.getElementById('fix').innerHTML+=num.toFixed(4)+"<br>";
document.getElementById('fix').innerHTML+=3.14159265.toFixed(6);

document.getElementById('pre').innerHTML=num.toPrecision()+"<br>";
document.getElementById('pre').innerHTML+=num.toPrecision(2)+"<br>";
document.getElementById('pre').innerHTML+=num.toPrecision(4)+"<br>";
document.getElementById('pre').innerHTML+=3.14159265.toPrecision(6);

num=255;
document.getElementById('str').innerHTML=num.toString()+"<br>";
document.getElementById('str').innerHTML+=(255).toString()+"<br>";
document.getElementById('str').innerHTML+=(3.14).toString()+"<br>";
document.getElementById('str').innerHTML+=num.toString(2)+"<br>";
document.getElementById('str').innerHTML+=(100).toString(16)+"<br>";
document.getElementById('str').innerHTML+=(-0xff).toString(2);

var numObj  = new Number(123);
document.getElementById('val').innerHTML=typeof numObj+"<br>";
num = numObj.valueOf();
document.getElementById('val').innerHTML+=num+"<br>";
document.getElementById('val').innerHTML+=typeof num;