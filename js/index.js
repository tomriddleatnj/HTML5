$(function () {
	var y;
	var lastY;
	var fqc = 0;
	//GIF封面展示完成后（约9秒）注册click事件方法：switchToPreparePage();
	setTimeout(function () {
		$("#main").click(switchToPreparePage);
	}, 9000);
	if (window.DeviceMotionEvent) {
		window.addEventListener('devicemotion', function (event) {
			var acceleration = event.accelerationIncludingGravity;
			lastY = y;
			if (lastY * y < 0) {
				fqc++;
			}
		}, false);
	}
});

function switchToPreparePage() {
	//解除原click事件
	$("#main").unbind("click");

	//加载准备页面
	$("#main").attr("src", "./img/prepare.gif");

	//GIF准备页面展示完成后（约13秒）注册click事件方法：switchToCountDownPage();
	setTimeout(function () {
		$("#main").click(switchToCountDownPage);
	}, 13000);
}

function switchToCountDownPage() {
	//解除原click事件
	$("#main").unbind("click");

	//加载倒计时页面
	$("#main").attr("src", "./img/countDown.gif");

	//GIF准备页面展示完成后（约3秒）跳转至测试页面：goToTestPage();
	setTimeout(goToTestPage, 3000);
}

function goToTestPage() {
	//解除原click事件
	$("#main").unbind("click");

	//加载测试计时页面
	$("#main").attr("src", "./img/testing.gif");
}

//setTimeout(function () {
//	alert("五秒内摇动：" + (fqc / 2) + "次！");
//}, 15000);
