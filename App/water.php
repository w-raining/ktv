<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/16
 * Time: 16:50
 */
class water{
    function index(){
        include 'Core/Db.php';
        $db = new Db();
        $stmt1 = $db->pdo->query('select * from water1 where cid = 1 ');
        $data1 = $stmt1->fetchAll();
        $stmt = $db->pdo->query('select * from water1 where cid = 2 ');
        $data = $stmt->fetchAll();
        include 'App/views/water/water1.html';
    }
    function water2(){
        include 'App/views/water/water2.html';
    }
    function water3(){
        include 'App/views/water/water3.html';
    }
    function a(){
        $cid = $_REQUEST['cid'];
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("select * from water1 where cid = '$cid' ");
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }
}