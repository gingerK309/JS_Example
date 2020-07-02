var x=10,y=20;
if(x==y){
    document.getElementById("res").innerHTML="x와 y는 같습니다.";
}
if(x<y){
    document.getElementById("res").innerHTML="x가 y보다 작습니다.";
}
if(x>y) document.getElementById("res").innerHTML="x가 y보다 큽니다."

var a=15,b=30;
if(a==b) document.getElementById("else").innerHTML="a와 b는 같습니다.";
else {if(a<b) document.getElementById("else").innerHTML="a가 b보다 작습니다.";
else document.getElementById("else").innerHTML="a가 b보다 큽니다.";
}

if(a==b) document.getElementById("elseif").innerHTML="a와 b는 같습니다.";
else if(a<b) document.getElementById("elseif").innerHTML="a가 b보다 작습니다.";
else document.getElementById("elseif").innerHTML="a가 b보다 큽니다.";

switch(typeof x){
    case "number":
        document.getElementById("x").innerHTML="변수 x의 타입은 숫자입니다.";
        break;
    case "string":
        document.getElementById("x").innerHTML="변수 x의 타입은 문자열입니다.";
        break;
    case "object":
        document.getElementById("x").innerHTML="변수 x의 타입은 객체입니다.";
        break;
    default:
        document.getElementById("x").innerHTML="변수 x의 타입을 모르겠습니다.";
        break;
}

var day= new Date().getDay();
switch(day){
    case 1: //월
    case 2: //화
    case 3: //수
    case 4: //목
      document.getElementById("day").innerHTML="주중입니다.";
      break;
    case 5: //금
      document.getElementById("day").innerHTML="불금!";
      break;
    case 6: //토
    case 0: //일
     document.getElementById("day").innerHTML="행복한 주말입니다.";
    break;
}
