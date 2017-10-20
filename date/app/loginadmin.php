<?php
/**
 * Created by PhpStorm.
 * User: hp
 * Date: 2017/7/7
 * Time: 10:55
 */
namespace app;
use core\core;
class loginadmin extends core
{
    //自动登录  不能放在构造函数里面
    public function index()
    {
//        if (isset($_COOKIE['login'])) {
//            header('location:/index.php/wateradmin/index');
//        } else {
            $this->display('loginadmin');
//        }



//        dump(md5('123456'));
//        dump(md5('123123'));
    }

    function check()
    {
        $name = $_REQUEST['name'];
        $password = $_REQUEST['password'];
        include 'Core/Db.php';
        $db = new Db();
        $stmt = $db->pdo->prepare('select * from login_check where user = ? ');
        $stmt->bindValue(1, $name);
        $stmt->execute();
        $data = $stmt->fetch();
        if ($data && $data['password'] == md5($password)) {
            setcookie('login', true, time() + 60 * 60 * 24 * 7, '/');
            echo 'ok';
            header('location:/index.php/wateradmin/index');
        } else {
            header('location:/index.php/loginadmin/index');
            echo 'error';
        }


    }
}