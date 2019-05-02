<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "backbone_crud";
$tbname = "person";

$dbconnect = mysql_connect($host,$user,$pass);
$dbselect = mysql_select_db($dbname,$dbconnect);
echo "hello";
exit;
if(!$dbselect) die("Failed to connect database");

$page = isset($_GET['p'])? $_GET['p'] : '';

if($page == "add"){
	$select = "select * from ".$tbname." where email = '".$_POST['email']."'";
	$q_sel = mysql_query($select);
	if(mysql_num_rows($q_sel) == 0){
	  $sql = "insert into ".$tbname." (id,name,email,phone,address) values ('".$_POST['id']."','".$_POST['name']."','".$_POST['email']."','".$_POST['phone']."','".$_POST['address']."')";
	
		$query = mysql_query($sql);
	}
}else if ($page == "edit") {
	$sql = "update ".$tbname." set name = '".$_POST['name']."',email = '".$_POST['email']."', phone = '".$_POST['phone']."',address = '".$_POST['address']."' where id = '".$_POST['id']."'";
	$query = mysql_query($sql);

}else if($page == "delete"){
	$sql = "delete from ".$tbname." where id = '".$_GET['id']."'";
	$query = mysql_query($sql);
}else{
	
	$sql = "select * from ".$tbname."";
	$query = mysql_query($sql);
	if(mysql_num_rows($query) > 0){
		while ($row = mysql_fetch_assoc($query)) {
		    $rs[] = $row;
		}
		echo json_encode($rs);	
	}
	
	
}

?>