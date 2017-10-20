<?php

include 'Core/debug.php';
include 'Core/Core.php';
include 'Core/function.php';
Core::run();

/*try{       //尝试连接数据库
$pdo = new PDO('mysql:host=192.168.3.166;dbname=test;port=3306;charset=utf8','root','root');
}catch(PDOException $e){
//    dump($e->errorInfo);
    dump($e->getMessage());
}*/

/*try{
    $pdo=new PDO('mysql:host=localhost;dbname=test;port=3306;charset=utf8','root','');
}catch (PDOException $e){
    dump($e->getMessage());
}*/


//增
/*$stmt=$pdo->prepare('insert into tip (title,content) VALUES (?,?) ');
$stmt->bindValue(1,'aaaaaaaa');  //第一个问号
$stmt->bindValue(2,'aaaaaaaaaa');  //第二个问号
$stmt->execute();   //执行
$id=$pdo->lastInsertId();
dump($id);*/

//删
//$stmt =$pdo->prepare('delete from tip where id = ? ');
//$stmt->bindValue(1,2);
//$stmt->execute();
























//查
/*$stmt =$pdo->query('select * from cata');
$data = $stmt->fetchAll();
dump($data);*/

//增
/*$stmt = $pdo->prepare('insert into cate (name,pic) values (?,?)');
$stmt ->bindValue(1,'内地男歌手');
$stmt ->bindValue(2,'家具啊');
$stmt ->execute();
$id =$pdo->lastInsertId();
dump($id);*/

//删除
//删除一条
/*$stmt =$pdo->prepare('delete from cate where id = ? ');
$stmt->bindValue(1,2);
$stmt->execute();*/

//删除多条
//$stmt =$pdo->query('delete from cate where id in (8,9,10,11) ');
//$stmt->bindValue(1,'1,2,3,5,7,8');
//$stmt->execute();

//改
/*$stmt = $pdo->prepare('update cate set name = ?,pic = ? where id = 8 ');
$stmt ->bindValue(1,'哈哈');
$stmt ->bindValue(2,'呵呵');
$stmt->execute();*/

























