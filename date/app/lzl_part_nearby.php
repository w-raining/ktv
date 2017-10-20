<?php
namespace app;
use core\core;
use core\db;

class lzl_part_nearby extends core
{
    function index(){
        $data = M('lzlschool')->selectAll();
        $this->assign('data', $data);

        $data = M('lzlvillage')->selectAll();
        $this->assign('base', $data);

        $data = M('lzlword')->selectAll();
        $this->assign('word', $data);

        $data = M('lzlpic')->selectAll();
        $this->assign('pic', $data);

        $data = M('lzlsp')->selectAll();
        $this->assign('sp', $data);
        $this->display('lzl_part_nearby');
    }
    function add_word(){
        $o = M('lzlword')->select();
        $n = $o['good'] + 1;
        M()->query("update lzlword set good = {$n}");
        $this->json($n);
    }
    function reduce_word(){
        $o = M('lzlword')->select();
        $n = $o['good'] - 1;
        M()->query("update lzlword set good = {$n}");
        $this->json($n);
    }

    function word(){
        $this->display('lzl_part_word');
    }

    function pic(){
        $this->display('lzl_part_pic');
    }

    function sp(){
        $this->display('lzl_part_sp');
    }
    function filter(){
        $data_id = $_REQUEST['data_id'];
        $age1 = $_REQUEST['age1'];
        $age2 = $_REQUEST['age2'];
        include 'core/db.php';
        $db = new db();
        if($data_id==1){
            $stmt=$db->pdo->query("select * from lzlschool where age between '$age1' and '$age2' ");
            $data= $stmt->fetchAll();
        }else{
            $stmt=$db->pdo->query("select * from lzlschool where sex ='$data_id' and age between '$age1' and '$age2' ");
            $data= $stmt->fetchAll();
        }
        echo json_encode($data);
    }
}