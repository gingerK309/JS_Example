function addNum(x,y,z){ //x,y,z는 매개변수임
return x+y+z;
}
document.getElementById("para").innerHTML="인수가 3개 모두 전달되면 반환값은 "+addNum(1,2,3)+"입니다.<br>";
document.getElementById("para").innerHTML+="인수가 2개만 전달되면 반환값은 "+addNum(1,2)+"입니다.<br>";
document.getElementById("para").innerHTML+="인수가 1개만 전달되면 반환값은 "+addNum(1)+"입니다.<br>";
document.getElementById("para").innerHTML+="인수가 아무것도 전달되지 않으면 반환값은 "+addNum()+"입니다.";

function addNum1(x,y,z){
    if(x===undefined) x=0;//x에 해당하는 인자가 없으면 x의 값을 undefined에서 0으로 변경함
    if(y===undefined) y=0;
    if(z===undefined)z=0;
    return x+y+z;
}
document.getElementById("para1").innerHTML="인수가 3개 모두 전달되면 반환값은 "+addNum1(1,2,3)+"입니다.<br>";
document.getElementById("para1").innerHTML+="인수가 2개만 전달되면 반환값은 "+addNum1(1,2)+"입니다.<br>";
document.getElementById("para1").innerHTML+="인수가 1개만 전달되면 반환값은 "+addNum1(1)+"입니다.<br>";
document.getElementById("para1").innerHTML+="인수가 아무것도 전달되지 않으면 반환값은 "+addNum1()+"입니다.";

function addNum2(){
    var sum=0;
    for(var i =0; i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
document.getElementById("para2").innerHTML="인수가 3개 모두 전달되면 반환값은 "+addNum2(1,2,3)+"입니다.<br>";
document.getElementById("para2").innerHTML+="인수가 2개만 전달되면 반환값은 "+addNum2(1,2)+"입니다.<br>";
document.getElementById("para2").innerHTML+="인수가 1개만 전달되면 반환값은 "+addNum2(1)+"입니다.<br>";
document.getElementById("para2").innerHTML+="인수가 아무것도 전달되지 않으면 반환값은 "+addNum2()+"입니다.<br>";
document.getElementById("para2").innerHTML+="인수가 10개 전달되면 반환값은 "+addNum2(1,2,3,4,5,6,7,8,9,10)+"입니다.";

function mul(a,b){
    b=(typeof b!=='undefined')?b:1;
    return a*b;
}
document.getElementById("para3").innerHTML="인수가 2개 전달되면 반환값은 "+mul(3,4)+"입니다.<br>";
document.getElementById("para3").innerHTML+="인수가 1개 전달되면 반환값은 "+mul(3)+"입니다.<br>";

function mul1(a,b=1){
    
    return a*b;
}
document.getElementById("para4").innerHTML="인수가 2개 전달되면 반환값은 "+mul1(3,4)+"입니다.<br>";
document.getElementById("para4").innerHTML+="인수가 1개 전달되면 반환값은 "+mul1(3)+"입니다.<br>";

function sub(){
    var firstNum = arguments[0]; //첫 번째 인수에서
    for(var i=1; i<arguments.length;i++) firstNum -=arguments[i];//두 번째 부터 마지막 인수까지를 뺌
    return firstNum;
}
document.getElementById("para5").innerHTML=sub(10,2,3)+"<br>";
document.getElementById("para5").innerHTML+=sub(10,1,5,8);

function restSub(firstNum,...restArgs){
    //첫 번째 인수를 변수 firstNum에 저장하고 나머지 인수들은 배열 restArgs에 저장
    for(var i=0;i<restArgs.length;i++) firstNum-=restArgs[i];
    return firstNum;
}
document.getElementById("para6").innerHTML=restSub(10,2,3)+"<br>";
document.getElementById("para6").innerHTML+=restSub(10,1,5,8);