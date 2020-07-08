/*
screen 객체는 사용자의 디스플레이 화면에 대한 다양한 정보를 저장하는 객체
*/
document.getElementById('screen').innerHTML="현재 사용자의 디스플레이 화면의 너비는 "+screen.width+"픽셀입니다.<br>";
document.getElementById('screen').innerHTML+="현재 사용자의 디스플레이 화면의 높이는 "+screen.height+"픽셀입니다.<br>";
document.getElementById('screen').innerHTML+="현재 브라우저 창의 너비는 "+ window.outerWidth +"픽셀입니다.<br>";
document.getElementById('screen').innerHTML+="현재 브라우저 창의 높이는 "+window.outerHeight+"픽셀입니다.<br>";

document.getElementById('able').innerHTML="실제 사용할 수 있는 화면의 너비는 "+screen.availWidth+"픽셀입니다.<br>";
document.getElementById('able').innerHTML+="실제 사용할 수 있는 화면의 높이는 "+screen.availHeight+"픽셀입니다.";

var bitColorDepth = screen.colorDepth;
document.getElementById('color').innerHTML="사용자 화면에서 한 색상당 사용할 수 있는 비트수는 "+bitColorDepth+"개입니다.<br>";
document.getElementById('color').innerHTML+="즉, 한 색상은 총 "+Math.pow(2,bitColorDepth)+ "가지로 표현됩니다.";

var bitPixelDepth= screen.pixelDepth;
document.getElementById('bit').innerHTML="사용자 화면의 한 픽셀당 표시할 수 있는 비트수는 "+bitPixelDepth+"개입니다.";