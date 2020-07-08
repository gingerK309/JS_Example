/*
history 객체는 브라우저의 히스토리 정보를 문서와 문서 상태 목록으로 저장하는 객체
*/
function openDocument(){
    location.href="50.Window 객체.html";
}
document.getElementById('text').innerHTML="현재 브라우저의 히스토리 목록 개수는 "+history.length+"개 입니다.";

