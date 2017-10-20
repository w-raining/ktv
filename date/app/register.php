<?php

namespace app;

use core\core;
use core\db;

class register extends core
{
    function index()
    {
        $this->display('register');
    }

    function insert()
    {
        M()->query("insert into  register (phone,code,password,password_one) VALUES ('$_REQUEST[phone]','$_REQUEST[code]','$_REQUEST[password]','$_REQUEST[password_one]')");
    }

    function insert1()
    {
        M()->query("insert into  email (email,password3,password4) VALUES ('$_REQUEST[email]','$_REQUEST[password3]','$_REQUEST[password4]')");
    }

}