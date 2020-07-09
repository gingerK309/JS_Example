/*
예외: 프로그램이 실행 중에 발생하는 런타임 오류
throw 표현식;
발생하는 예외를 처리하기 위해 try / catch / finally 문을 사용
1. try 블록 : 기본적으로 맨 먼저 실행되는 코드이며, 여기에서 발생한 예외는 catch 블록에서 처리
2. catch 블록 : try 블록에서 발생한 예외 코드나 Error 객체를 인수로 전달받아 그 처리를 담당
3. finally 블록 : 이 블록은 try 블록에서 예외의 발생 여부와 상관 없이 맨 마지막에 무조건 실행
Error: 런타임 오류가 발생할 때마다 Error 객체의 인스턴스가 만들어져 해당 오류의 정보를 저장
*/
var btn = document.getElementById('throw');
btn.addEventListener("click",throwBtn);
function throwBtn(){
    try{
        throw new Error("직접 발생시킨 에러입니다.");// Error 객체를 사용해 명시적으로 에러를 발생시킴
    }catch(error){
        document.getElementById('text').innerHTML =error.name+"<br>";// 에러의 타입
        document.getElementById('text').innerHTML += error.message;// 에러 메시지
    }
}

