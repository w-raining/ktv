<?php

namespace app;
use core\core;
use core\db;

class person extends core{
    function index()
    {
        $this->display('person');
    }
    function erweima()
    {
        $this->display('person_erweima');
    }
    function xinyongdu()
    {
        $this->display('person_xinyongdu');
    }
}