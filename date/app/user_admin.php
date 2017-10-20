<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/22
 * Time: 10:24
 */
namespace app;
use core\core;
use core\db;

class user_admin extends core
{
//    function __construct()
//    {
//        check_login();
//    }

    function index()
    {
        $title = '游戏管理';
        $this->display('user_admin');
    }

    function admin()
    {
        $data = M('register')->selectAll();
         echo json_encode($data);
    }
    function delete(){
        $id = $_REQUEST['id'];
        $stmt = M()->query("delete from register WHERE id = '$id' ");
//        if ($stmt->rowCount()) {
//            echo 'OK';
//        } else {
//            echo 'error';
//        }
        echo 'ok';
    }
    function insert(){

    }

}