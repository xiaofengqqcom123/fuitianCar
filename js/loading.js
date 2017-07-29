//loading页面中要用到的元素
var loading = document.getElementById("loading");
var progress_bar = document.getElementsByClassName("progress_bar")[0];
var progress_precent = document.getElementsByClassName("progress_percent")[0];


//首页中要用到的元素
var home_page = document.getElementById("home_page");
var home_page_rule = document.getElementsByClassName("home_page_rule")[0];
var home_page_rule_close_btn = document.getElementsByClassName("close_btn")[0];
var home_page_btn_rule = document.getElementsByClassName("btn_rule")[0];
var home_page_btn_start = document.getElementsByClassName("btn_start")[0];
var home_page_btn_list = document.getElementsByClassName("btn_list")[0];
var home_page_list = document.getElementsByClassName("home_page_list")[0];
var home_page_list_ul = document.getElementsByTagName("ul")[0];
var home_page_list_ul_li = document.getElementsByTagName("li");
var home_page_list_close_btn = document.getElementsByClassName("home_page_close_btn")[0];



// loading页面出现时,使页面宽高适应屏幕宽高
loading.style.width = document.documentElement.clientWidth + "px" || document.body.clientWidth + 'px';
loading.style.height = document.documentElement.clientHeight + "px" || document.body.clientHeight + 'px';


var str1 = "img/loading/Leaderboard.png";
var str2 = "img/loading/logo.png";
var str3 = "img/loading/背景.png";
var str4 = "img/loading/车.png";
var str5 = "img/loading/车手排名.png";
var str6 = "img/loading/关闭背景.png";
var str7 = "img/loading/活动前.png";
var str8 = "img/loading/矩形-3.png";
var str9 = "img/loading/矩形-8.png";
var str10 = "img/loading/开始游戏.png";
var str11 = "img/loading/排行榜.png";
var str12 = "img/loading/图层-1.png";
var str13 = "img/loading/形状-1-拷贝.png";
var str14 = "img/loading/游戏规则.png";
var str15 = "img/loading/主题.png";
var str16 = "img/loading/组-6.png";
var str17 = "img/loading/组-9.png";
var str18 = "img/成绩/成功1.png";
var str19 = "img/成绩/成功1-联系方式.png";
var str20 = "img/成绩/成功2.png";
var str21 = "img/成绩/成功2-share.png";
var str22 = "img/成绩/成功-矩形-2.png";
var str23 = "img/成绩/分享.png";
var str24 = "img/成绩/分享给更多好友.png";
var str25 = "img/成绩/留资-矩形-10.png";
var str26 = "img/成绩/排行榜.png";
var str27 = "img/成绩/失败1.png";
var str28 = "img/成绩/提交.png";
var str29 = "img/成绩/图层-0.png";
var str30 = "img/成绩/形状-1-拷贝.png";
var str31 = "img/成绩/再来一次.png";
var str32 = "img/成绩/组-4.png";
var str33 = "img/游戏页/1085581_zcool.com.cn.png";
var str34 = "img/游戏页/背景.png";
var str35 = "img/游戏页/拱门1.png";
var str36 = "img/游戏页/拱门2.png";
var str37 = "img/游戏页/广告.png";
var str38 = "img/游戏页/机会用完.png";
var str39 = "img/游戏页/加油枪.png";
var str40 = "img/游戏页/竞赛车.png";
var str41 = "img/游戏页/矩形-1.png";
var str42 = "img/游戏页/矩形-1-拷贝.png";
var str43 = "img/游戏页/矩形-3.png";
var str44 = "img/游戏页/蓝色氮气瓶.png";
var str45 = "img/游戏页/起跑线.png";
var str46 = "img/游戏页/剩余时间.png";
var str47 = "img/游戏页/水坑.png";
var str48 = "img/游戏页/我的车.png";
var str49 = "img/游戏页/行驶距离.png";
var str50 = "img/矩形-13.png";
var str51 = "img/loading/图层-62.png";
var str52 = "img/loading/排行榜btn.png";
var str53 = "img/游戏页/排行榜btn.png";
var imgsArr = [str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14, str15, str16, str17, str18, str19, str20, str21, str22, str23, str24, str25, str26, str27, str28, str29, str30, str31, str32, str33, str34, str35, str36, str37, str38, str39, str40, str41, str42, str43, str44, str45, str46, str47, str48, str49,str50,str51,str52,str53];
for(var i = 0; i < imgsArr.length; i++) {
	//创建img标签
	var imgCreate = document.createElement("img");
	//给img添加src(对图片进行缓存)
	imgCreate.src = imgsArr[i];
	//声明一个变量(用来计算缓存图片的张数)
	var all = 0;
	//如果图片加载完毕(上面创建的那张)
	imgCreate.onload = function() {
		all++;
		if(all % 2 == 0) {
			//创建div(放到进度条中,表示进度)
			var divCreate = document.createElement("div");
			//给创建的div一个class名,用来接收CSS中的样式
			divCreate.className = "progress_sec";
			//给div宽度(根据父级progress_bar的宽度来定)
			divCreate.style.width = (progress_bar.clientWidth - parseInt(imgsArr.length / 2) * 10) / imgsArr.length * 2 + "px";
			//将创建的div放入父级中
			progress_bar.appendChild(divCreate);
		}
		//改变进度值
		progress_precent.innerHTML = parseInt(all / imgsArr.length * 100) + "%";
		//如果图片全部加载完毕,进行跳转
		if(all == imgsArr.length) {
			// alert("预加载完成");
			loading.style.display = "none";
			home_page.style.display = "block";
			
		}
	}
}

// 首页页面出现时,使页面宽高适应屏幕宽高
home_page.style.width = document.documentElement.clientWidth + "px" || document.body.clientWidth + 'px';
home_page.style.height = document.documentElement.clientHeight + "px" || document.body.clientHeight + 'px';

// 首页按钮"游戏规则"
home_page_btn_rule.onclick = function() {
	home_page_rule.style.display = "block";
}
// "游戏规则"页面关闭按钮
home_page_rule_close_btn.onclick = function() {
	home_page_rule.style.display = "none";
}
// 首页按钮"排行榜"
home_page_btn_list.onclick = function() {
	home_page_list.style.display = "block";
	// 作兼容
		if(window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}else {
			xmlhttp = ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4) {
				if(xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status == 304) {
					// responseText接收后台返回的值
					// box.innerHTML = xmlhttp.responseText;
					var data = JSON.parse(xmlhttp.responseText);
					// liCount用来排名次
					var liCount = 0;
					if(home_page_list_ul_li.length == 1) {
						for(var i = 0;i < data.length;i ++) {
							if(i % 2 == 1) {
								liCount++;
								// 创建排行榜li标签
								var liCreate = document.createElement("li");
								liCreate.className = "liSec";
								home_page_list_ul.appendChild(liCreate);
								// 创建图片标签,用来放置用户头像
								var imgCreate = document.createElement("img");
								imgCreate.src = "img/loading/图层-62.png";
								liCreate.appendChild(imgCreate);
								// 将创建的三个p标签(用来放"用户" "成绩" "名次")
								var p1Create = document.createElement("p");
								var p2Create = document.createElement("p");
								var p3Create = document.createElement("p");
								// 给三个p标签添加class名
								p1Create.className = "userName";
								p2Create.className = "grade";
								p3Create.className = "rank";
								// 给三个p标签添加内容
								p1Create.innerHTML = data[i-1];
								p2Create.innerHTML = data[i] + "km";
								p3Create.innerHTML = liCount;
								// 将创建的三个p标签放入创建的li中
								liCreate.appendChild(p1Create);
								liCreate.appendChild(p2Create);
								liCreate.appendChild(p3Create);
							}
						}
					}
				}
			}
		}
		xmlhttp.open("get","http://127.0.0.1/loading/grade.php","true");
		xmlhttp.send();
}
// "排行榜"页面关闭按钮
home_page_list_close_btn.onclick = function() {
	home_page_list.style.display = "none";
}

home_page_btn_start.onclick = function() {
	home_page.style.display = "none";
	window.open("123.html","_self");
}



























