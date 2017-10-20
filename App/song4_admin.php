<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/22
 * Time: 10:24
 */
class song4_admin
{
    function __construct()
    {
        check_login();
    }

    function index()
    {
        $title = '歌单管理';
        include 'App/views/geshou/song4_admin.html';
    }

    function admin()
    {
        sleep(1);
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query('select * from recommend ');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function insert()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('insert into recommend (name,time) values (?,?,?) ');
        $stmt->bindValue(1, $_REQUEST['name']);
        $stmt->bindValue(2, $_REQUEST['listener']);
        $stmt->bindValue(3, $_REQUEST['num']);
        $stmt->execute();
        echo $db->pdo->lastInsertId();
    }

    function delete()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('delete from recommend where id = ? ');
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
        $stmt = $db->pdo->prepare("update recommend set {$_REQUEST['key']} =? where id=?");
        $stmt->bindValue(1, $_REQUEST['value']);
        $stmt->bindValue(2, $_REQUEST['id']);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}