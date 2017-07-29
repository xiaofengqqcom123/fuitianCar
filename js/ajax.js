function ajax(obj){
	var xmlhttp = null;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
		// console.log(1);
	}else{
		xmlhttp = ActiveXObject('Microsoft.XMLHTTP');
	}

	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4){
			if((xmlhttp.status >= 200 && xmlhttp.status < 300) || xmlhttp.status == 304){
				obj.success(xmlhttp.responseText);
			}else{
				obj.error(xmlhttp.status);
			}
		}
	}

	var arr = [];
	for(var key in obj.data){
		arr.push(key + "=" + obj.data[key]);
	}
	var str = arr.join('&');


	if (obj.type == "get") {
		xmlhttp.open(obj.type,obj.url + "?" + str + "&time=" + new Date(),"obj.async");
		console.log('str = ' + str);
		xmlhttp.send();
	}else if(obj.type == "post"){
		xmlhttp.open(obj.type,obj.url,"obj.async");
		xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlhttp.send(str);
	}else{
		alert("你是不是傻？");
	}
}