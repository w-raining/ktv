<?php

/**
 * Created by PhpStorm.
 * User: 李高峰
 * Date: 2017/7/5
 * Time: 14:51
 */

namespace app;

use core\core;
use core\db;

class login extends core
{
    function header()
    {
        $this->display("login_header");
    }

    function index()
    {
        $this->display("login_index");
    }

    function check()
    {
        $phone = $_REQUEST['phone'];
        $password=$_REQUEST['password'];

        include 'core/Db.php';
        $db = new db();
        $stmt=$db->pdo->prepare('select * from register where phone=?');
        $stmt->bindValue(1,$phone);
        $stmt->execute();
        $data=$stmt->fetch();

        if($data&&($data['password']==$password)){
            echo 'ok';
        }else{
            echo 'error';
        }
    }

    function check1()
    {
        $email = $_REQUEST['email'];
        $password=$_REQUEST['password'];

        include 'core/Db.php';
        $db = new db();
        $stmt=$db->pdo->prepare('select * from email where email=?');
        $stmt->bindValue(1,$email);
        $stmt->execute();
        $data=$stmt->fetch();

        if($data&&($data['password3']==$password)){
            echo 'ok';
        }else{
            echo 'error';
        }
    }


    function wait()
    {
        $this->display("login_wait");
    }

    function phone()
    {
        $this->display("login_phone");
    }

    function settings()
    {
        $this->display("login_settings");
    }

}