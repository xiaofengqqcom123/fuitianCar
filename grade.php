<?php
mysql_connect("127.0.0.1:3306","root","");
mysql_select_db("futianMySQL");
mysql_query("set names utf8");
$sql = "select * from mySQL";
$result = mysql_query($sql);
if(mysql_num_rows($result)>0) {
	while($row = mysql_fetch_assoc($result)) {
		$arr[] = $row['grade'];
	}
}
rsort($arr);
$arrCount = count($arr);
for($i = 0;$i < $arrCount;$i ++) {
	$sql1 = "select * from mySQL where grade='$arr[$i]'";
		$result1 = mysql_query($sql1);
		if(mysql_num_rows($result1)>0) {
		while($row1 = mysql_fetch_assoc($result1)) {
			$arr1[] = $row1['userName'];
			$arr1[] = $row1['grade'];
		}
	}
}
echo json_encode($arr1);


?>






















