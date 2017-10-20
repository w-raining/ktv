<?php

namespace app;

use core\core;
use core\db;

class dynamic extends core
{
    function index()
    {
        $data1 = M('dynamic_car')->selectAll();
        $this->assign('data1',$data1);
        $data2 = M('dynamic_eat')->selectAll();
        $this->assign('data2',$data2);
        $data3 = M('dynamic_date')->selectAll();
        $this->assign('data3',$data3);
        $this->display('dyna_sy');
    }
    function home()
    {
        $this->display('dyn_ry_home');
    }
}