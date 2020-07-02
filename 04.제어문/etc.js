var exceptNum=3;
for(var i=0;i<=100;i++){
    if(i%exceptNum==0) continue;
    document.getElementById('con').innerHTML+= i + " ";
}
gugudan:
 for(var i=2; i<=9;i++){
     dan:
     for(var j=1;j<=9;j++){
         if((i*j)%2==0) continue dan;
         document.getElementById("gugudan").innerHTML+=(i+"*"+j+"="+(i*j)+"<br>");
     }
 }

 var lectures = ["html","css","javascript","php"];
 var topic="javascript";
 for(var i=0;i<lectures.length;i++){
     if(lectures[i]==topic){
         document.getElementById("lec").innerHTML=topic+" 과목은 "+(i+1)+"번째 과목입니다.";
         break; //원하는 값을 찾은 후에 for문 탈출
     }
 }

 gugudan1:
  for(var i=2; i<=9; i++){
      dan1:
      for(var j=1;j<=9;j++){
          if(i>3) break gugudan1;
          document.getElementById("gugudan1").innerHTML+=
          i+" * "+j+" = "+(i*j)+"<br>";
      }
  }