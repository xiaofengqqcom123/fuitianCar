

function BackgroundClass(){
	this.imgOne = new Image();
	this.imgOne.src = "img/游戏页/广告.png";
	this.imgTwo = new Image();
	this.imgTwo.src = "img/游戏页/广告.png";
	
	this.imgThree = new Image();
	this.imgThree.src = "img/游戏页/起跑线.png";
	
	this.imgFour = new Image();
	this.imgFour.src = "img/游戏页/拱门1.png";
	
	this.imgFive = new Image();
	this.imgFive.src = "img/游戏页/拱门2.png";
	
	this.imgSix = new Image();
	this.imgSix.src = "img/游戏页/time.png";
	
	this.speed = 5;
	this.num = 0;
	this.imgOne_y = -game.height;
	this.imgTwo_y = 0;
	this.imgThree_y = game.height - 250;
	this.imgFour_y = game.height - 400;
	this.imgFive_y = -game.height * 2;
	this.imgSix_y = 100;
	this.drawBackground = function (){
		context.beginPath();
		context.drawImage(this.imgOne,0,this.imgOne_y,game.width,game.height);
		context.drawImage(this.imgTwo,0,this.imgTwo_y,game.width,game.height);
		context.drawImage(this.imgThree,0,this.imgThree_y,game.width,50);
		context.drawImage(this.imgSix,0,this.imgSix_y,game.width,60);
		context.save();
	}
	this.drawAdver = function (){
		context.beginPath();
		context.drawImage(this.imgFour,0,this.imgFour_y,game.width,150);
		context.drawImage(this.imgFive,0,this.imgFive_y,game.width,150);
		context.save();
	}
	this.backgroundMove = function (){
		grade ++;
		this.num ++;
		if(this.num % 200 == 0){
			this.speed ++;
		}
		this.imgOne_y += this.speed;
		if(this.imgOne_y >= game.height){
			this.imgOne_y = -game.height;
		}
		this.imgTwo_y += this.speed;
		if(this.imgTwo_y >= game.height){
			this.imgTwo_y = -game.height;
		}
		this.imgThree_y += this.speed;
		if(this.imgThree_y >= game.height){
			this.imgThree_y = game.height + 200;
		}
		
		this.drawBackground();
	}
	
	this.advertMove = function (){
		this.num ++;
		if(this.num % 300 == 0){
			this.speed ++;
		}
		this.imgFour_y += this.speed;
		if(this.imgFour_y >= game.height){
			this.imgFour_y = game.height + 200;
		}
		
		this.imgFive_y += this.speed;
		if(this.imgFive_y >= game.height){
			this.imgFive_y = game.height + 200;	
		}
		this.drawAdver();
	}
}
