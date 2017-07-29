var countdown_num1 = document.getElementById("countdown_num1");



//倒计时函数
var timer = null;
countdown_num1.innerHTML = 3;
timer = setInterval(function (){
	countdown_num --;
	countdown_num1.innerHTML = countdown_num;
	if(countdown_num <= 0){
		clearInterval(timer);
		timer = null;
		countdown.style.display = "none";
		game.style.display = "block";
	}
},1000);

