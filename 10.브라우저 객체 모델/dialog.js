function alertDialogBox(){
    alert("확인을 누를 때까지 다른 작업을 할 수 없어요!");
}

function confirmDialogBox(){
    var str;
    if(confirm("확인이나 취소를 눌러주세요!")==true){
        str="당신은 확인을 눌렀습니다.";
    }else str="당신은 취소를 눌렀습니다.";
document.getElementById('text').innerHTML=str;
}

function promptDialogBox(){
    var inputStr= prompt("닉네임을 입력해 주세요 : ","길동이백숙");
    if(inputStr!=null){
        document.getElementById('prom').innerHTML="닉네임: "+inputStr;
    }
}