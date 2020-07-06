/*
노드 리스트는 getElementsByTagName() 메소드나 childNodes 프로퍼티의 값으로 반환되는 객체
문서 내의 모든 노드를 리스트 형태로 저장 
리스트에 노드를 추가하거나 삭제되면 자신의 상태 정보를 스스로 갱신
*/
var listItems = document.getElementById('list').childNodes;//아이디가 "list"인 요소의 모든 자식 노드들을 선택
listItems[1].firstChild.nodeValue="HTML 요소의 내용을 변경!";

listItems=document.getElementById('list2').childNodes; //아이디가 "list2"인 요소의 모든 자식 노드들을 선택함
document.getElementById('li').innerHTML=listItems[0].nodeValue+"<br>";//자식 노드들 중 첫 번째 노드 값
document.getElementById('li').innerHTML+=listItems[1].firstChild.nodeValue+"<br>";//자식 노드들 중 두 번째 노드의 자식 노드 중 첫번째 노드 값
document.getElementById('li').innerHTML+=listItems[2].nodeValue+"<br>";//자식 노드들 중 세 번째 노드 값

listItems= document.getElementsByName("third");
document.getElementById('text').innerHTML=
"이 노드 리스트의 길이는 "+listItems.length+"개 입니다.<br>";//모든 자식 노드 개수 반환

function changeTextColor(){
    for(var i=0; i<listItems.length;i++)
    listItems[i].style.color="blue";
}