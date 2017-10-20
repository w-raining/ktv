<?php
/**
 * Created by PhpStorm.
 * User: hp
 * Date: 2017/7/7
 * Time: 11:05
 */
namespace app;
use core\core;
class admin_news extends core{
    function index()
    {
        $title='消息管理';
        include 'app/views/admin_news.html';
    }
}