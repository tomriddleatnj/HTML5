var max = 0;
var min = 0;

alert("开始你的表演");

setTimeout(function (){
	alert(max);
	alert(min);
}, 5000);

if (window.DeviceMotionEvent) {
	window.addEventListener('devicemotion', function (event) {
		var acceleration = event.accelerationIncludingGravity;
		y = acceleration.y;
		if(y > max){
			max = y;
		}
		if(y < min){
			min = y;
		}
	}, false);
}
