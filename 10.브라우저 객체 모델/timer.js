/*
window 객체는 일정 시간이 지난 뒤에 함수를 호출할 수 있도록 다음 메소드를 제공
1. setTimeout(): 명시된 시간이 지난 뒤에 지정된 함수를 호출
    window.setTimeout(호출할함수, 지연시간);
2. setInterval(): 지정된 시간 간격마다 지정된 함수 반복 호출
    window.setInterval(호출할함수, 지연시간);

설정된 함수의 호출을 취소할 수 있도록 다음 메소드를 제공
3. clearTimeout(): setTimeout() 메소드의 반환값을 clearTimeout() 메소드의 인수로 전달하면 계획된 함수의 호출을 취소,  함수 호출전에 실행해야함
    window.clearTimeout(timeoutID);
4. clearInterval(): 반복되는 함수의 호출을 취소할 수 있음
 */
var timeoutId;
function startTimeout(){
    setTimeout(printCurrentDate,2000);
}
function startTimeout2(){
    timeoutId=setTimeout(printCurrentDate2,2000);
}
function cancelTimeout(){
    clearTimeout(timeoutId);
}

function printCurrentDate(){
    document.getElementById('date').innerHTML=new Date();
}

function printCurrentDate2(){
    document.getElementById('date2').innerHTML=new Date();
}

function printCurrentTime(){
    document.getElementById('time').innerHTML+=new Date()+"<br>";
}

function startInterval(){
  timeoutId= setInterval(printCurrentTime,2000);
}

function cancelInterval(){
    clearInterval(timeoutId);
}