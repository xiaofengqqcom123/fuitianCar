

function MyCarClass(){
	this.carImg = new Image();
	this.carImg.src = "img/游戏页/我的车.png";
	
	this.x = game.width / 2 - MYCARWIDHT / 2;
	this.y = game.height - MYCARHEIGHT;
	this.width = MYCARWIDHT;
	this.height = MYCARHEIGHT;
	this.drawMyCar = function (){
		context.beginPath();
		context.drawImage(this.carImg,this.x,this.y,this.width,this.height);
	}
	
	this.mycarMove = function (mycar){
		game.addEventListener("touchstart",function (event){
			var event = event || window.event;
			var x = event.touches[0].clientX - this.offsetLeft;
			var y = event.touches[0].clientY - this.offsetTop;
			
			if(x >= mycar.x && x <= mycar.x + MYCARWIDHT && y <= mycar.y + MYCARHEIGHT && y >= mycar.y ){
				document.addEventListener("touchmove",touchMove,false);
			}
		},false);
		
		function touchMove(event){
			var event = event || window.event;
			var dx = event.touches[0].clientX - MYCARWIDHT / 2;
			var dy = event.touches[0].clientY - MYCARHEIGHT / 2;
			
			if(dx +  MYCARWIDHT>= game.width){
				dx = game.width - MYCARWIDHT;
			}
			if(dx <= 0){
				dx = 0;
			}
			mycar.x = dx;
		}
	}
}
