<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/22
 * Time: 10:24
 */
class song1_admin
{
    function __construct()
    {
        check_login();
    }

    function index()
    {
        $title= '分类管理';
        include 'Core/Db.php';
        $db=new Db();
        $stmt=$db->pdo->query('select * from singer');
        $music=$stmt->fetchAll();
        $title='音乐分类管理';
        include 'App/views/geshou/song1_admin.html';
    }

    function admin()
    {
        $title= '分类管理';
        sleep(1);
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query('select * from singer ');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function insert()
    {
//        print_r($_FILES);
        $src=$_FILES['imgurl']['tmp_name'];
        $ext = explode('.',$_FILES['imgurl']['name'])[1];
        $file_name = md5(time()).'.'.$ext;
        $dist = 'public/upload/'.$file_name;
        $name = '/public/upload/'.$file_name;
        move_uploaded_file($src,$dist);

        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('insert into singer (imgurl,name) values (?,?) ');
        $stmt->bindValue(1, $name);
        $stmt->bindValue(2, $_REQUEST['name']);
        $stmt->execute();
        echo $db->pdo->lastInsertId();
    }

    function delete()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('delete from singer where id =?');
        $stmt->bindValue(1, $_REQUEST['id']);
        $stmt->execute();
        if ($stmt->rowCount()) {
            echo 'OK';
        } else {
            echo 'error';
        }
    }

    function update()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare("update singer set {$_REQUEST['key']} =? where id=?");
        $stmt->bindValue(1, $_REQUEST['value']);
        $stmt->bindValue(2, $_REQUEST['id']);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}