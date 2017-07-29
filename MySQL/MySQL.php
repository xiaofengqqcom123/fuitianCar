<?php

// 接收数据
$name = $_POST['name'];
$telNumber = $_POST['telNumber'];
$type = $_POST['type'];
$sqlGrades = $_POST['sqlGrades'];
//连接服务器
mysql_connect("127.0.0.1:3306","root","");
// 连接数据库
$query = mysql_select_db("futianMySQL");
// 判断是否连接成功
if($query){
	echo "连接成功";
}
// 改格式
mysql_query("set names utf8");

//查询数据库
$sql = "select * from mySQL where userName='$name',telNumber='$telNumber'";
$result1 = mysql_query($sql);
// 如果不存在
if (!mysql_num_rows($result1)) {
	// 判断类型，插入
	if ($type == "insert") {
		$insertSql = "insert into mySQL (userName,telNumber,grade) values ('$name','$telNumber','$sqlGrades')";
		mysql_query($insertSql);
	}else if ($type == "update") {
		$updateSql = "update mySQL set grade='$sqlGrades' where userName='$name',telNumber='$telNumber'";
		mysql_query($updateSql);
	}

}


		// if (mysql_affected_rows() > 0) {
		// 	echo "添加成功啦";
		// }else{
		// 	echo "添加失败";
		// }


mysql_close();
?>