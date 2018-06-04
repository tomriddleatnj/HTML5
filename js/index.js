"use strict";
var isStarted = false;

// 开始摇签
function start() {
	isStarted = true;
	$('.qiancover').hide();
	$('.decode').hide();
	$('.result').show();
	// setTimeout(showDecode, 3000);
}

//摇一摇(使用DeviceMotion事件, 推荐,应为可以计算加速度)
if (window.DeviceMotionEvent) {
	var speed = 25;
	var x, y, z, lastX, lastY, lastZ;
	x = y = z = lastX = lastY = lastZ = 0;

	window.addEventListener('devicemotion', function (event) {
		var acceleration = event.accelerationIncludingGravity;
		x = acceleration.x;
		y = acceleration.y;
		if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
			alert(y);
		}
		lastX = x;
		lastY = y;
	}, false);
}
