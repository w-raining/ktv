<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/16
 * Time: 16:27
 */
class game
{
    function index()
    {
        include 'App/views/game/index.html';
    }

    function game2()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query('select * from risk limit 9');
        $data = $stmt->fetchAll();
        include 'App/views/game/game2.html';
    }
    function game3()
    {
        $page = $_REQUEST['page'];
        $cid = $_REQUEST['cid'];
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("select * from risk where cid = '$cid' order by id desc Limit 9 offset ".($page - 1) * 9);
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function game4()
    {
        $cid = $_REQUEST['cid'];
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("select * from risk where cid = '$cid' order by id desc Limit 9 offset 3 ");
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

}
