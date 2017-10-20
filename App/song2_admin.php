<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/22
 * Time: 10:24
 */
class song2_admin
{
    function __construct()
    {
        check_login();
    }

    function index()
    {
        $title = '歌手管理';
        include 'App/views/geshou/song2_admin.html';
    }

    function admin()
    {
        sleep(1);
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query('SELECT s.* , l.singer AS singer1_singer,l.img_url AS singer1_pic
  FROM song AS s , singer1 AS l
  WHERE l.id=s.aid order by singer1_singer');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function insert()
    {
//        print_r($_FILES);
        $src_1 = $_FILES['src']['tmp_name'];
        $ext = explode('.',$_FILES['src']['name'])[1];
        $file_name = md5(time()).'.'.$ext;
        $dist = 'public/upload_music/'.$file_name;
        $names = '/public/upload_music/'.$file_name;
        move_uploaded_file($src_1,$dist);

        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('insert into song (name,src,aid,duration) values (?,?,?,?) ');
        $stmt->bindValue(1, $_REQUEST['name']);
        $stmt->bindValue(2, $names);
        $stmt->bindValue(3, $_REQUEST['aid']);
        $stmt->bindValue(4, $_REQUEST['duration']);
        $stmt->execute();
        echo $db->pdo->lastInsertId();
    }

    function search()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("select * from singer1 where singer like '{$_REQUEST['keyword']}%' ");
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function delete()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('delete from song where id = ? ');
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
        $stmt = $db->pdo->prepare("update song set {$_REQUEST['key']} =? where id=?");
        $stmt->bindValue(1, $_REQUEST['value']);
        $stmt->bindValue(2, $_REQUEST['id']);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}