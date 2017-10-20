<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/16
 * Time: 15:01
 */
class page
{
    function init()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query('select * from tip order by id desc');
        $data = $stmt->fetchAll();
        echo json_encode($data);

    }

    function init_info()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->query('select * from tip');
        $data = $stmt->fetchAll();
        include 'App/views/add/insert.html';
    }

    function insert()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('insert into tip (title,content) values (?,?)  ');
        $stmt->bindValue(1, $_REQUEST['title']);
        $stmt->bindValue(2, $_REQUEST['content']);
        $stmt->execute();
        echo $db->pdo->lastInsertId();
    }

    function delete()
    {
        include 'Core/Db.php';
        $db = new Db();
        $id = $_REQUEST['id'];
        $stmt = $db->pdo->prepare('delete from tip where id = ?');
        $stmt->bindValue(1, $id);
        $stmt->execute();
        echo 'ok';
    }


    function update_info()
    {
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('update set title=? content=? where id = ? ');
        $stmt->bindValue(1, $_REQUEST['id']);
        $stmt->bindValue(1, $_REQUEST['title']);
        $stmt->bindValue(1, $_REQUEST['content']);
        $stmt->execute();
        $data = $stmt->fetchAll();
        echo $db->pdo->lastInsertId();

    }


    /*
        function add_info()
        {
            include 'Core/Db.php';
            $db = new Db();
            $title = $_REQUEST['title'];
            $content = $_REQUEST['content'];
            $stmt = $db->pdo->prepare('insert into tip (title,content) values (?,?) ');
            $stmt->bindValue(1, $title);
            $stmt->bindValue(2, $content);
            $stmt->execute();
            header('location:/index.php/page/add');
        }
        function delete_info(){
            include 'Core/Db.php';
            $db = new Db();
            $id = $_REQUEST['id'];
            $stmt = $db->pdo->prepare('delete from tip where id = ?');
            $stmt->bindValue(1,$id);
            $stmt->execute();
            header('location:/index.php/page/add');
        }

        function add()
        {
            include 'Core/Db.php';
            $db = new Db();
            $stmt = $db->pdo->query('select * from tip order by id desc ');
            $data = $stmt->fetchAll();
            include 'App/views/add/add.html';
        }

        function update()
        {
            include 'Core/Db.php';
            $db = new Db();
            $stmt = $db->pdo->prepare('select * from tip where id = ? ');
            $stmt->bindValue(1,$_REQUEST['id']);
            $stmt->execute();
            $data=$stmt->fetch();
            include 'App/views/add/update.html';
        }
        function update_info()
        {
            include 'Core/Db.php';
            $db = new Db();
            $stmt = $db->pdo->prepare('update tip set title = ?,content = ? where id = ? ');
            $stmt->bindValue(1,$_REQUEST['id']);
            $stmt->bindValue(2,$_REQUEST['title']);
            $stmt->bindValue(3,$_REQUEST['content']);
            $stmt->execute();
            header('location:/index.php/page/add');

        }
    */


}