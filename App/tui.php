<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/16
 * Time: 16:50
 */
class tui
{
    function index()
    {
        include 'App/views/tui/tui1.html';
    }

    function tuijian()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("select * from recommend");
        $data = $stmt->fetchAll();
        include 'App/views/tui/tuijian.html';
    }
    function tuilist(){
        $id = $_REQUEST['id'];
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("SELECT s.* , l.singer AS singer1_singer,l.img_url AS singer1_pic
  FROM song AS s , singer1 AS l
  WHERE l.id=s.aid");
        $data = $stmt->fetchAll();
        $stmt = $db->pdo->query("select * from recommend where id=".$id);
        $data1 = $stmt->fetch();
        include 'App/views/tui/tuilist.html';

    }

}