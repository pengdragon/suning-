<?php
   $phone = $_GET["phone"];
    $coon = new mysqli('localhost', 'root', '', 'db_student_admin');
    $sql = "select * from user_info where phone='$phone'";
    // 用户名称如果可以是中文,要设置字符集
    $coon -> query("SET NAMES 'utf8'");//写库 
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
        $arr = array("code" => "0", "data" => "");
    }
    echo json_encode($arr);

?>