<?php
/**
 * Created by PhpStorm.
 * User: hp
 * Date: 2017/7/7
 * Time: 10:55
 */
namespace app;
use core\core;
class admin_activity extends core{
    function index()
    {
        $title='活动管理';
        include 'app/views/admin_activity.html';
    }
}