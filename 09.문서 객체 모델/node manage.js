/*
1.노드의 추가
-appendChild(): 새로운 노드를 해당 노드의 자식 노드 리스트 맨 마지막에 추가
-insertBefore(): 새로운 노드를 특정 자식 노드 바로 앞에 추가
    부모노드.insertBefore(새로운자식노드, 기준자식노드);
-insertData(): 텍스트 노드의 데이터에 새로운 텍스트를 추가
    텍스트노드.insertData(오프셋, 새로운데이터);
    오프셋(offset) : 오프셋 값은 0부터 시작하며, 기존 텍스트 데이터의 몇 번째 위치부터 추가할지를 전달
 
2.노드의 생성
-createElement(): 새로운 "요소" 노드를 생성
-createAttribute(): 새로운 "속성" 노드를 생성
-createTextNode(): 새로운 "텍스트" 노드를 생성
 
3.노드의 제거
-removeChild(): 특정 자식 노드 제거, 제거되는 노드의 모든 자식 노드들도 다 같이 제거
-removeAttribute(): 속성 이름을 이용하여 특정 속성 노드 제거
 
4.노드의 복제
-cloneNode(): 특정 노드를 복제
    복제할노드.cloneNode(자식노드복제여부);
 */
function appendNode(){
    var parent = document.getElementById('list');
    var newItem=document.getElementById('item');
    parent.appendChild(newItem);
}

function appendNode2(){
    var parent= document.getElementById('list2');
    var criteriaItem=document.getElementById('criteria');
    var newItem=document.getElementById('item2');
    parent.insertBefore(newItem,criteriaItem);
}

var time=new Date();
document.getElementById('time').innerHTML=time.getHours()+"시 "+time.getMinutes()+"분 ";
var text=document.getElementById('text').firstChild;//아이디가 "text"인 요소의 텍스트 노드 선택
function appendText(){
    text.insertData(6," 나른한 ");//텍스트 노드의 6번째 문자부터 텍스트 추가
}

function createNode(){
    var criteriaNode=document.getElementById('create');
    var newNode=document.createElement('p');//새로운 <p> 요소를 생성함
    newNode.innerHTML="새로운 단락";
    document.body.insertBefore(newNode,criteriaNode);//새로운 요소를 기준이 되는 요소 바로 앞에 추가
}

function createNode2(){
    var text= document.getElementById('att');
    var newAttribute = document.createAttribute("style");//새로운 style 속성 노드를 생성
    newAttribute.value="color:blue";
    text.setAttributeNode(newAttribute);//해당 요소의 속성 노드로 추가
}

function createNode3(){
    var elementNode=document.getElementById('txt');
    var newText= document.createTextNode("새 텍스트 "); // 새로운 텍스트 노드 생성
    elementNode.appendChild(newText);//해당 요소의 자식 노드로 추가
}

function remove(){
    var parent= document.getElementById('rm');
    var removedItem=document.getElementById('select');
    parent.removeChild(removedItem);
}

function remove2(){
    var text= document.getElementById('back');
    text.removeAttribute("style");
}

function cloneElement(){
    var parent=document.getElementById('ramen');
    var originItem=document.getElementById('copy');
    parent.appendChild(originItem.cloneNode(true));//해당 노드를 복제하여 리스트의 마지막에 추가
}