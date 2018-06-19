$(function () {
	//GIF封面展示完成后（约9秒）注册click事件方法：switchToPreparePage();
	setTimeout(function () {
		$("#main").click(switchToPreparePage);
	}, 9000);
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

	y = 0;
	lastY = 0;
	fqc = 0;
	if (window.DeviceMotionEvent) {
		window.addEventListener('devicemotion', function (event) {
			var acceleration = event.accelerationIncludingGravity;
			lastY = y;
			y = acceleration.y;
			if (lastY * y < 0) {
				fqc++;
			}
		}, false);
	}
	fqc = 0;
	setTimeout(function () {
		times = fqc / 2;
	}, 15000);
	setTimeout(function () {
		alert("十五秒内摇动了：" + times + "次！");
		if (times <= 52) {
			goToTestResultPage('LA');
		} else if (times <= 78) {
			goToTestResultPage('LB');
		} else if (times <= 100) {
			goToTestResultPage('LC');
		} else if (times <= 120) {
			goToTestResultPage('LD');
		} else {
			goToTestResultPage('LE');
		}
	}, 18000);
}

function goToTestResultPage(level) {
	//解除原click事件
	$("#main").unbind("click");

	//加载倒计时页面
	$("#main").attr("src", "./img/" + level + "1.jpg");

	if ('LE' !== level) {
		setTimeout(function () {
			$("#main").click(function () {
				$("#main").attr("src", "./img/" + level + "2.jpg");
			});
		}, 1000);
	}
}
