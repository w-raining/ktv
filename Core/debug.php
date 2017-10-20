<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/16
 * Time: 14:58
 */
include "Core/vendor/autoload.php";
$whoops = new \Whoops\Run;
$options = new \Whoops\Handler\PrettyPageHandler();
$whoops->pushHandler($options);
$whoops->register();
ini_set('display_errors', 'On');