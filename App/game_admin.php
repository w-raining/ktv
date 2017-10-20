<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/22
 * Time: 10:24
 */
class game_admin
{
    function __construct()
    {
        check_login();
    }

    function index()
    {
        $title = '游戏管理';
        include 'App/views/game/game_admin.html';
    }

    function admin()
    {
        sleep(1);
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query('select * from risk ');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function insert()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('insert into risk (content,cid) values (?,?) ');
        $stmt->bindValue(1, $_REQUEST['content']);
        $stmt->bindValue(2, $_REQUEST['cid']);
        $stmt->execute();
        echo $db->pdo->lastInsertId();
    }

    function delete()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('delete from risk where id =?');
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
        $stmt = $db->pdo->prepare("update risk set {$_REQUEST['key']} =? where id=?");
        $stmt->bindValue(1, $_REQUEST['value']);
        $stmt->bindValue(2, $_REQUEST['id']);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}