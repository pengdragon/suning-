<?php
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $phone =  $data->phone;
    $password =  $data->password;
    $coon = new mysqli('localhost', 'root', '', 'db_student_admin',3306); 
   $insert_sql = "INSERT INTO user_info(phone,password) VALUES('$phone','$password')";
   $sql = "select * from user_info where phone='$phone'";
   $coon->query("SET CHARACTER SET 'utf8'");//读库   
   $coon->query("SET NAMES 'utf8'");//写库 
   //执行
   $result = $coon -> query($sql);
   // $row = 查询结果在执行fetch_assoc() , 返回第一条数据
   $row = $result -> fetch_assoc();
   // 如果查询到数据, 返回一个对象, 为关联数据
   // 查不到数据返回null
   if($row) {
       //  查到数据
       $arr = array("code" => "10000", "data" => "");
   } else {
       // 没有查询到
       $coon -> query( $insert_sql);
       $arr = array("code" => "0", "data" => "");
   }
   echo json_encode($arr);

?>