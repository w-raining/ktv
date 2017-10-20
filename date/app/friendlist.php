<?php

namespace app;

use core\core;
use core\db;

/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 2017/7/5
 * Time: 11:47
 */
class friendlist extends core
{
    function index()
    {
        $this->assign('number', M('numorder')->selectAll());
        $this->assign('data', M('friend')->selectAll());
        $this->assign('mess', M('message')->selectAll());
        $this->display('list_lt');
    }

    function addcall()
    {
        $this->display('addcall_lt');
    }

    function calllist()
    {
//        $this->assign('data', M()->query("select * from people WHERE nid = " . $_REQUEST['id']));
        $this->assign('number', M('numorder')->selectAll());
        $this->assign('data', M('people')->selectAll());
        $this->display('calllist_lt');
    }

    function call_list()
    {
        $data = M('people')->selectAll();
        echo json_encode($data);
    }

    function select_calllist()
    {
        $this->assign('data', M('friend')->selectAll());
    }

    function add_calllist()
    {
        M()->query("insert into friend (nid,name,pic,sign,act,message) VALUES ('$_REQUEST[nid]','$_REQUEST[name]','$_REQUEST[pic]','$_REQUEST[sign]','$_REQUEST[act]','$_REQUEST[message]')");
    }


    function aa()
    {
        $this->assign('data', M()->query("select * from friend WHERE nid = " . $_REQUEST['id']));
    }

    function search()
    {
        $this->display('search_lt');
    }
}