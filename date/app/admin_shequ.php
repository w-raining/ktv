<?php
/**
 * Created by PhpStorm.
 * User: hp
 * Date: 2017/7/7
 * Time: 10:37
 */
namespace app;
use core\core;
class admin_shequ extends core{
    function index()
    {
        $title='社区管理';
        include 'app/views/admin_shequ.html';
    }
}