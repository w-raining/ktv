<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/22
 * Time: 10:24
 */
class song3_admin
{
    function __construct()
    {
        check_login();
    }

    function index()
    {
        $title = '歌曲管理';
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query('select * from singer ');
        $music = $stmt->fetchAll();
        $title = '歌曲管理';
        include 'App/views/geshou/song3_admin.html';
    }

    function admin()
    {
        sleep(1);
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query('select * from singer1 ');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function insert()
    {
//        print_r($_FILES);
        $src=$_FILES['img_url']['tmp_name'];
        $ext = explode('.',$_FILES['img_url']['name'])[1];
        $file_name = md5(time()).'.'.$ext;
        $dist = 'public/upload/'.$file_name;
        $name = '/public/upload/'.$file_name;
        move_uploaded_file($src,$dist);

        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('insert into singer1 (singer,img_url,number,cid) values (?,?,?,?) ');
        $stmt->bindValue(1, $_REQUEST['singer']);
        $stmt->bindValue(2, $name);
        $stmt->bindValue(3, $_REQUEST['number']);
        $stmt->bindValue(4, $_REQUEST['cid']);
        $stmt->execute();
        echo $db->pdo->lastInsertId();
    }

    function delete()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('delete from singer1 where id = ? ');
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
        $stmt = $db->pdo->prepare("update singer1 set {$_REQUEST['key']} =? where id=?");
        $stmt->bindValue(1, $_REQUEST['value']);
        $stmt->bindValue(2, $_REQUEST['id']);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}