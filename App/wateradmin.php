<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/22
 * Time: 10:24
 */
class wateradmin
{
    function __construct()
    {
        check_login();
    }

    function index(){
        $title='商店管理';
        include 'App/views/water/wateradmin.html';
    }
    function admin_header(){
        include 'App/views/admin_header.html';
    }
    function sidebar(){
        include 'App/views/water/sidebar.html';
    }
    function admin()
    {
        sleep(1);
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query('select * from water1 ');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }
    function insert(){
                print_r($_FILES);
        $src=$_FILES['imgurl']['tmp_name'];
        $ext = explode('.',$_FILES['imgurl']['name'])[1];
        $file_name = md5(time()).'.'.$ext;
        $dist = 'public/upload/'.$file_name;
        $name = '/public/upload/'.$file_name;
        move_uploaded_file($src,$dist);

        include 'Core/Db.php';
        $db = new Db();
        $stmt=$db->pdo->prepare('insert into water1 (imgurl,imgurl_fiir,info,price,cid) values (?,?,?,?,?) ');
        $stmt->bindValue(1,$name);
        $stmt->bindValue(2,$_REQUEST['imgurl_fiir']);
        $stmt->bindValue(3,$_REQUEST['info']);
        $stmt->bindValue(4,$_REQUEST['price']);
        $stmt->bindValue(5,$_REQUEST['cid']);
        $stmt->execute();
        echo $db->pdo->lastInsertId();
    }
    function delete(){
        include 'Core/Db.php';
        $db = new Db();
        $stmt=$db->pdo->prepare('delete from water1 where id =?');
        $stmt->bindValue(1,$_REQUEST['id']);
        $stmt->execute();
        if($stmt->rowCount()){
            echo 'OK';
        }else{
            echo 'error';
        }
    }
    function update(){
        include 'Core/Db.php';
        $db = new Db();
        $stmt=$db->pdo->prepare("update water1 set {$_REQUEST['key']} =? where id=?");
        $stmt->bindValue(1,$_REQUEST['value']);
        $stmt->bindValue(2,$_REQUEST['id']);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}