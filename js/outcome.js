var box = document.getElementById("box");
var success1 = document.getElementById("success1");
var success1_tel = document.getElementById("success1_tel");
var success1TelBtn = document.getElementById("success1TelBtn");
var success2TelBtn = document.getElementById("success2TelBtn");
var message = document.getElementById("message");
var close = document.getElementById('close');
var submit = document.getElementById('submit');
var share = document.getElementById('share');
var shareWord = document.getElementById('shareWord');
var success2 = document.getElementById('success2');
var defeat = document.getElementById('defeat');
var again = document.getElementById('again');
var ranking_list = document.getElementById('ranking_list');
var forms = document.getElementById('forms');
var win_grade = document.getElementById('win_grade');
var defeat_grade = document.getElementById("defeat_grade");




// 定义次数
var chance_nums = 3;
var sqlGrade = 0;

// 接收存储的分数
var mySession = window.sessionStorage;
var grade = mySession.getItem('grade');


//设置box的宽高
box.style.width = document.documentElement.clientWidth + 'px' || document.body.clientWidth + 'px';
box.style.height = document.documentElement.clientHeight + 'px' || document.body.clientHeight  + 'px';

// 判断机会
if (chance_nums >= 0) {
	// 判断分数
	// 成功的情况
	if (grade >= 1000) {
		// 加分
		sqlGrade = grade;
		// 用户信息没有输入的情况
		
		success1.style.display = 'block';
		win_grade.innerHTML = grade + "KM";
		if (chance_nums == 3) {
			//实现由success1向联系方式转换
			success1TelBtn.onclick = function (){
				message.style.display = 'block';
			}

			// 信息页面中的关闭
			close.onclick = function(){
				message.style.display = 'none';
				console.log('22');
			}
			// 信息页面中的信息提交
			submit.onclick = function(){
				var MessageName = document.getElementById('MessageName').value;
				var MessageTelNumber = document.getElementById('MessageTelNumber').value;
				
				// 判断数据是否符合规则
				if (MessageName == '') {
					alert('姓名不能为空');
				}


				var reg = /^1[34578]\d{9}$/ig;
				console.log(MessageTelNumber);
		
				if (MessageTelNumber.match(reg) == '') {
					alert('请输入正确的电话号码');
				}

				// 符合数据时
				if (MessageName != '' && MessageTelNumber.match(reg) != '') {
					chance_nums = 2;
					// 连接数据库
					ajax({
						type:"post",
						url:"http://127.0.0.1/loading/MySQL/MySQL.php",
						async:true,
						data:{
							name:MessageName,
							telNumber:MessageTelNumber,
							chance_num:chance_nums,
							sqlGrades:sqlGrade,
							type:"insert"
						},
						success:function(response){
							console.log(response);
						},
						error:function(error){
							alert(error);
						}
					});
					// 设置倒计时，转到游戏开始页面
					var time = setTimeout(function(){
						window.open('main.html','_self');
					},2000);
					share.style.display = 'block';
				}	
			}

		}else{
			chance_nums --;
			success2.style.display = 'block';
			success1.style.display = 'block';
			success2TelBtn.onclick = function (){
				share.style.display = 'block';
			}
			sqlGrade += grade;
			// 连接数据库
			ajax({
					type:"post",
					url:"http://127.0.0.1/loading/MySQL/MySQL.php",
					async:true,
					data:{
						sqlGrades:sqlGrade,
						type:"update",
					},
					success:function(response){
						console.log(response);
					},
					error:function(error){
						alert(error);
					}
				});
				if (chance_nums > 0) {
					// 设置倒计时，转到游戏开始页面
					var time = setTimeout(function(){
						window.open('main.html','_self');
					},2000);
				}
		}
	}else{
		
		defeat.style.display = 'block';
		defeat_grade.innerHTML = grade + "KM";

		// 再来一次
		again.onclick = function(){
			window.open("123.html","_self");
		}
		// 排行榜
		ranking_list.onclick = function(){
			window.open("ranking.html","_self");
		}
	}
}else{
	// 机会不够的情况
}

