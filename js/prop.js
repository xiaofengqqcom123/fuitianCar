function PropClass(x,y,width,height,speed,type,kind){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;
	this.img = new Image();
	this.img.src = "img/游戏页/"+ type +".png";
	this.kind = kind;
}

function ran(min,max){
	return parseInt(Math.random()*(max - min) * min); 
}


function PropMoveClass(){
	this.onePlace = (game.width / 4) / 2;
	this.twoPlace = this.onePlace + game.width / 4;
	this.threePlace = this.threePlace + game.width / 4;
	this.propPlaceArr = [this.onePlace,this.twoPlace,this.threePlace];
	
	this.propArr = [];
	this.propMove = function (bg){
		
		this.placeRan = ran(0,3);
		this.propRan = ran(1,800);
		
		if(this.propRan == 30){
			var prop1 = new PropClass(this.propPlaceArr[this.placeRan],-80,99,80,5,"加油枪",0);
			this.propArr.push(prop1);
		}
		if(this.propRan == 50){
			var prop1 = new PropClass(this.propPlaceArr[this.placeRan] + 30,-119,41,119,5,"蓝色氮气瓶",1);
			this.propArr.push(prop1);
		}
		
		if(this.propRan == 80){
			var prop1 = new PropClass(this.propPlaceArr[this.placeRan],-79,99,79,5,"水坑",2);
			this.propArr.push(prop1);
		}
		
		
		
		for(var i = 0;i < this.propArr.length;i ++){
			
			if(this.propArr[i].y >= game.height){
				this.propArr.splice(i,1);
				continue;
			}
			
			this.propArr[i].y += this.propArr[i].speed;
			
			context.beginPath();
			context.drawImage(this.propArr[i].img,this.propArr[i].x,this.propArr[i].y,this.propArr[i].width,this.propArr[i].height);
			context.save();
		}
	}
}












