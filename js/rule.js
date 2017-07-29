function RuleClass(){
	
	this.myCarSportsCarPZ = function (mycar,sportscar){
		
		for(var i = 0;i < sportscar.sportsCarArr.length;i ++){
			var sportscarX = sportscar.sportsCarArr[i].x;
			var sportscarY = sportscar.sportsCarArr[i].y;
			var sportscarWidth = sportscar.sportsCarArr[i].width;
			var sportscarHeight = sportscar.sportsCarArr[i].height;
			
			var mycarX = mycar.x;
			var mycarY = mycar.y;
			var mycarWidth = mycar.width;
			var mycarHeight = mycar.height;
			
			if(mycarX <= sportscarX + sportscarWidth && mycarX + mycarWidth >= sportscarX && mycarY + mycarHeight >= sportscarY && mycarY <= sportscarY + sportscarHeight){
				sportscar.sportsCarArr.splice(i,1);
				window.open("outcome.html","_self");
				clearInterval(timer1);
				timer1 = null;
				var mySession1 = window.sessionStorage;
				mySession1.setItem('grade',grade);
				grade = 0;
			}		
		}
	}
	
	
	this.mycarPropPZ = function (mycar,prop,bg){
		
		for(var i = 0;i < prop.propArr.length;i ++){
			var mycarX = mycar.x;
			var mycarY = mycar.y;
			var mycarWidth = mycar.width;
			var mycarHeight = mycar.height;
			
			var propX = prop.propArr[i].x;
			var propY = prop.propArr[i].y;
			var propWidth = prop.propArr[i].width;
			var propHeight = prop.propArr[i].height;
			
			if(mycarX <= propX + propWidth && mycarX + mycarWidth >= propX && mycarY + mycarHeight >= propY && mycarY <= propY + propHeight){
				
				
				if(prop.propArr[i].kind == 0){
					countdown_time += 5;
					console.log(countdown_time);
				}
				if(prop.propArr[i].kind == 1){
					bg.speed += 2;
				}
				if(prop.propArr[i].kind == 2){
					bg.speed -= 3;
				}
				prop.propArr.splice(i,1);
			}
		}
	}
}
