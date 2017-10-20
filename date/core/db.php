<?php

namespace core;

class db
{
    public $pdo;
    public $table;
    public $condition;

    public function __construct($table = '')
    {
        $this->table = $table;
        $this->pdo = new \PDO('mysql:host=localhost;dbname=xiangyue;port=3306;charset=utf8',
            'root', '');
    }

    public function query($sql)
    {
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }
    public function querys($sql)
    {
        $stmt = $this->pdo->query($sql);
        return $stmt->fetch();
    }

    public function selectAll()
    {
        if ($this->condition) {
            foreach ($this->condition as $k => $v) {
                $sql = "select * from {$this->table} WHERE {$k} = '{$v}'";
            }
        } else {
            $sql = "select * from {$this->table}";
        }
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }

    public function where($where)
    {
        $this->condition = $where;
        return $this;
    }

    public function select()
    {
        if ($this->condition) {
            foreach ($this->condition as $k => $v) {
                $sql = "select * from {$this->table} WHERE {$k} = {$v}";
            }
        } else {
            $sql = "select * from {$this->table}";
        }
        $stmt = $this->pdo->query($sql);
        return $stmt->fetch();
    }
}