/*
HTML 문서에서 HTML DOM 노드에 접근하는 방법
1. getElementsByTagName() 메소드를 이용하는 방법
2. 노드 간의 관계를 이용하여 접근하는 방법
-parentNode : 부모 노드
-childNodes : 자식 노드 리스트
-firstChild : 첫 번째 자식 노드
-lastChild : 마지막 자식 노드
-nextSibling : 다음 형제 노드
-previousSibling : 이전 형제 노드

노드에 대한 정보는 다음과 같은 프로퍼티를 통해 접근
1. nodeName: 노드 고유의 이름 저장, 읽기 전용
2. nodeValue: 노드의 값을 저장
3. nodeType: 노드 고유의 타입 저장, 읽기 전용
-요소 노드(element node): 1
-속성 노드(attribute node): 2
-텍스트 노드(text node): 3
-주석 노드(comment node): 8
-문서 노드(document node):9
 */
// HTML 문서의 모든 자식 노드 중에서 두 번째 노드의 이름을 선택
document.getElementById('document').innerHTML = document.childNodes[1].nodeName;//HTML
// html 노드의 모든 자식 노드 중에서 첫 번째 노드의 이름을 선택
document.getElementById('html').innerHTML = document.childNodes[1].childNodes[0].nodeName;//HEAD


var headingText= document.getElementById('heading').firstChild.nodeValue;
document.getElementById('text1').innerHTML=headingText;
document.getElementById("text2").firstChild.nodeValue = headingText;

var headingType=document.getElementById('type').firstChild.nodeType;
document.getElementById('head2').innerHTML=headingType;
document.getElementById('document2').innerHTML=document.nodeType;

var lastNode;
function findLastChild(parentNode){
    lastNode = parentNode.lastChild;
    while(lastNode.nodeType!=1) //요소 노드가 아니면 
        lastNode=lastNode.previousSibling;
}
function printLastChild(){
    var parentNode= document.getElementById('parentNode');
    findLastChild(parentNode);
    document.getElementById('nodename').innerHTML=lastNode.nodeName;
}


