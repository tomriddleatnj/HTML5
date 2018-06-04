var y;
var lastY;
var max = 0;
var min = 0;
var fqc = 0;

if (window.DeviceMotionEvent) {
	window.addEventListener('devicemotion', function (event) {
		var acceleration = event.accelerationIncludingGravity;
		lastY = y;
		y = acceleration.y;
		if (y > max) {
			max = y;
		}
		if (y < min) {
			min = y;
		}
		if(lastY * y < 0){
			fqc ++;
		}
	}, false);
}

alert("开始测试力度，倒计时5秒！");

setTimeout(function () {
	alert("最大加速度：" + (max - min));

	fqc = 0;
	alert("开始测试频率，倒计时5秒！");
	setTimeout(function () {
		alert("五秒内摇动：" + (fqc/2) + "次！");
	}, 5000);
}, 5000);
