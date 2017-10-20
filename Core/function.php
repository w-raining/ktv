<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/30
 * Time: 15:38
 */
function check_login(){
    if(!isset($_COOKIE['login'])) {
        header('location:/index.php/loginadmin/index');
    }
}