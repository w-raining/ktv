<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/16
 * Time: 15:06
 */
class Core
{
    public static function run()
    {
        /*include 'App/page.php';
         $page = new page();
         if ((!isset($_SERVER['PATH_INFO'])) || ($_SERVER['PATH_INFO']) === '/') {
             $fn = 'index';
         } else {
             $fn = substr($_SERVER['PATH_INFO'], '1');
         }
         if (method_exists('page', $fn)) {
             $page->$fn();
         } else {
             include 'App/views/error.html';
         }*/
        if ((!isset($_SERVER['PATH_INFO']) || ($_SERVER['PATH_INFO']) == '/')/* || ($_SERVER(['PATH_INFO']) == '')*/) {
        $class_name = 'first';
        $fn = 'index';
//            dump($class_name);
//            dump($fn);
    } else {
        $path_info = explode('/', substr(($_SERVER['PATH_INFO']), 1));
//            dump($path_info);     //music  index
        $class_name = $path_info[0];     //music
        $fn = isset($path_info[1]) && $path_info[1] ? $path_info[1] : 'index';
    }
        if (file_exists("App/{$class_name}.php")) {       //App/music.php
            include "App/{$class_name}.php";
            if (class_exists($class_name)) {
                $page = new $class_name();
                if (method_exists($class_name, $fn)) {
                    $page->$fn();
                } else {
                    include 'App/views/error.html';
                }
            } else {
                include 'App/views/error.html';
            }
        } else {
            include 'App/views/error.html';
        }
    }
}
