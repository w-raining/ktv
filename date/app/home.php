<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/4
 * Time: 10:14
 */

namespace app;

use core\core;
use core\db;

class home extends core
{
    function index()
    {

        $data = M('article')->selectAll();
        $this->assign('data', $data);
        $this->display('home');
    }

    function show()
    {
        $this->assign('article', M('a_info')->where($_GET)->select());
        $this->display('show');
    }

    public function add_good()
    {
        $o = M('article_info')->where($_GET)->select();
        $n = $o['good'] + 1;
        M()->query("update article_info set good = {$n} where article_id = {$_GET['article_id']}");
        $this->json($n);
    }

    public function min_good()
    {
        $o = M('article_info')->where($_GET)->select();
        $n = $o['good'] - 1;
        M()->query("update article_info set good ={$n} WHERE article_id = {$_GET['article_id']}");
        $this->json($n);
    }

    public function add_bad()
    {
        $o = M('article_info')->where($_GET)->select();
        $n = $o['bad'] + 1;
        M()->query("update article_info set bad = {$n} where article_id = {$_GET['article_id']}");
        $this->json($n);
    }

    public function min_bad()
    {
        $o = M('article_info')->where($_GET)->select();
        $n = $o['bad'] - 1;
        M()->query("update article_info set bad ={$n} WHERE article_id = {$_GET['article_id']}");
        $this->json($n);
    }

    public function publish()
    {
        $data = M('article')->selectAll();
        $this->assign('data', $data);
        $this->display('publish');
    }

    public function upload()
    {
        M()->query("update article set content = {$_REQUEST['content']} WHERE id = {$_REQUEST['id']}");
    }

}

//editor.customConfig.uploadFileName = 'yourFileName' 写在file之前