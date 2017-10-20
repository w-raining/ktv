<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/16
 * Time: 16:50
 */
class geshou
{
    function index()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("select * from singer");
        $data = $stmt->fetchAll();
        include 'App/views/geshou/song1.html';
    }

    function song2()
    {
        $id = $_REQUEST['cid'];
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("select * from singer1 where cid = '$id' ");
        $data1 = $stmt->fetchAll();
        include 'App/views/geshou/song2.html';
    }

    function singer1()
    {
        $id = $_REQUEST['id'];
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("select * from singer1  where  id = ".$id);
        $data = $stmt->fetch();

        $stmt1 = $db->pdo->query("SELECT s.* , l.singer AS singer1_singer,l.img_url AS singer1_pic
  FROM song AS s , singer1 AS l WHERE l.id=s.aid and l.id='$id' ");
        $list = $stmt1->fetchAll();
        include 'App/views/geshou/singer1.html';
    }

    function paihang()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("SELECT s.* , l.singer AS singer1_singer,l.img_url AS singer1_pic
  FROM song AS s , singer1 AS l
  WHERE l.id=s.aid");
        $data = $stmt->fetchAll();
        include 'App/views/geshou/paihang.html';
    }

    function chang()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("SELECT s.* , l.singer AS singer1_singer,l.img_url AS singer1_pic
  FROM song AS s , singer1 AS l WHERE l.id=s.aid");
        $data = $stmt->fetchAll();
        include 'App/views/geshou/chang.html';
    }
    function lyric(){
        $id = $_REQUEST['id'];
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query("SELECT s.* , l.singer AS singer1_singer,l.img_url AS singer1_pic
  FROM song AS s , singer1 AS l
  WHERE l.id=s.aid and l.id=" .$id);
        $music = $stmt->fetch();
        include 'App/views/geshou/lyric.html';
    }
    function song_list(){

        include 'App/views/geshou/song_list.html';
    }
}