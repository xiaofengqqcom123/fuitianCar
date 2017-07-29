


function SportsCarClass(x,y,width,height,speed){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;
	this.img = new Image();
	this.img.src = "img/游戏页/竞赛车.png";
}

function ran1 (min,max){
	return parseInt(Math.random()*(max - min) + min);
}

function SportsCarMove(){
	this.onePlace = (game.width / 4) / 2;
	this.twoPlace = this.onePlace + game.width / 4;
	this.threePlace = this.threePlace + game.width / 4;
	this.propPlaceArr = [this.onePlace,this.twoPlace,this.threePlace];
	
	this.sportsCarArr = [];
	
	this.sportsCarMove = function (bg){
		this.placeRan1 = ran1(0,3);
		this.sportsCarRan = ran1(1,150);
		
		if(this.sportsCarRan == 30){
			var car1 = new SportsCarClass(this.propPlaceArr[this.placeRan1],-150,75,150,bg.speed);
			this.sportsCarArr.push(car1);
		}
		
		for(var i = 0;i < this.sportsCarArr.length;i ++){
			
			if(this.sportsCarArr[i].y >= game.height){
				this.sportsCarArr.splice(i,1);
				continue;
			}
			
			this.sportsCarArr[i].y += this.sportsCarArr[i].speed;
			
			context.beginPath();
			context.drawImage(this.sportsCarArr[i].img,this.sportsCarArr[i].x,this.sportsCarArr[i].y,this.sportsCarArr[i].width,this.sportsCarArr[i].height);
			context.save();
			
		}
	}
}
