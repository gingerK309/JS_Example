/*
location 객체는 현재 브라우저에 표시된 HTML 문서의 주소를 얻거나, 브라우저에 새 문서를 불러올 때 사용
 */
document.getElementById('url').innerHTML="현재 문서의 URL 주소는 "+location.href+"입니다.";

var host= location.hostname+"not exist ";
document.getElementById('host').innerHTML="현재 문서의 호스트 이름은 "+host+"입니다.";

document.getElementById('file').innerHTML="현재 문서의 파일 경로명은 "+location.pathname+"입니다.";

function openDocument(){
    location.assign('https://github.com/');
}
function openDocumentWithReplace(){
    location.replace('https://github.com/');
}