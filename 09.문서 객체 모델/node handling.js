/*
1. 노드 값 변경
nodeValue 프로퍼티를 사용하면 특정 노드의 값을 변경
setAttribute() 메소드는 속성 노드의 속성값을 변경

2. 요소 노드의 교체
-replaceChild(): 기존의 요소 노드를 새로운 요소 노드로 교체
    교체할노드 = 부모노드.replaceChild(새로운자식노드, 기존자식노드);
-replaceData(): 텍스트 노드의 데이터를 변경
    텍스트노드.replaceData(오프셋, 교체할문자수, 새로운데이터);
    오프셋(offset) : 오프셋 값은 0부터 시작하며, 기존 텍스트 데이터의 몇 번째 문자부터 교체할지를 전달
 */

 //요소 노드의 텍스트 값을 확인하거나 변경하고자 할 때는 요소 노드에 포함된 텍스트 노드에 접근
 var para= document.getElementById('text');
 function changeText(){
     para.firstChild.nodeValue="텍스트 변경 완료!";
 }
 para;
 function changeAttribute(){
     //모든 <p> 요소중에서 두 번째 요소에 클래스 속성값으로 "para" 설정
     document.getElementsByTagName("p")[1].setAttribute("class","para");
 }

 var parent= document.getElementById('parent');//부모 노드 선택
 var first = document.getElementById('first');
 var third = document.getElementById('third');

 function changeNode(){
     parent.replaceChild(third,first);//first 요소를 삭제하고 그 자리에 third 요소를 삽입함
 }

 var time = new Date().getHours()+"시 입니다.";
 var text = document.getElementById('data').firstChild; 
 function changeText(){
    text.replaceData(7,10,time);
 }