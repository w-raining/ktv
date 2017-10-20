<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/16
 * Time: 15:00
 */
class Db{
    public $pdo;
    public  function __construct()
    {
//        $this->pdo = new PDO('mysql:host=sqld.duapp.com;dbname=wwdWjUGGBqIaueiEYPTM;port=4050;charset=utf8','64b9c50e9d15433992f57499833b71e4','c24f4981d4d34469bea01a4eef35e266');
        $this->pdo=new PDO('mysql:host=localhost;dbname=test;port=3306;charset=utf8','root','');

    }
}

