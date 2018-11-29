<?php
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $phone =  $data->phone;
    $password =  $data->password;
    $coon = new mysqli('localhost', 'root', '', 'db_student_admin',3306); 
   $insert_sql = "INSERT INTO user_info(phone,password) VALUES('$phone','$password')";
   $coon->query("SET CHARACTER SET 'utf8'");//读库   
   $coon->query("SET NAMES 'utf8'");//写库 
   //执行
   $coon -> query( $insert_sql);
    //  $coon ->query( $insert_sql);
    //  $row = $coon ->query($sql);
    //  $result =$row->fetch_all();

?>