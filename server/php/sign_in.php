<?php
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $username =  $data->username;
    $password =  $data->password;
    $coon = new mysqli('localhost', 'root', '', 'db_student_admin',3306); 
    $sql = "select * from user_info where phone='$username' and password='$password'";
    $coon -> query("SET NAMES 'utf8'");//写库 
    //$arr = "{"username":$username,"password":$password}";
    $result = $coon -> query($sql);
    $row = $result -> fetch_assoc();

    if($row){
        $arr = array("code" => "10000", "data" => ""); 
    }else{
        $arr = array("code" => "0", "data" => ""); 
    }
    echo json_encode($arr);
?>