--这个文件我们不直接使用
--在该文件中定义整个应用用到的数据库--如果表存在  则删除这张表
DROP TABLE IF EXISTS risk;
CREATE TABLE risk(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR (255),
  cid INT (12)
) DEFAULT CHARSET = utf8;
INSERT INTO risk (content,cid) VALUES
('真心话1',1),
('真心话2',1),
('真心话3',1),
('真心话4',1),
('真心话5',1),
('真心话6',1),
('真心话7',1),
('真心话8',1),
('真心话9',1),
('真心话10',1),
('真心话12',1),
('真心话13',1),
('真心话14',1),
('真心话15',1),
('真心话16',1),
('真心话17',1),
('大冒险1',2),
('大冒险2',2),
('大冒险3',2),
('大冒险4',2),
('大冒险5',2),
('大冒险6',2),
('大冒险7',2),
('大冒险8',2),
('大冒险9',2),
('大冒险10',2),
('大冒险11',2),
('大冒险12',2),
('大冒险13',2),
('大冒险14',2),
('大冒险15',2),
('大冒险16',2);


DROP TABLE IF EXISTS song;
CREATE TABLE song(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255),
  src VARCHAR (255),
  aid VARCHAR (255),
  duration VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO song (name,src,aid,duration) VALUES
('歌手与演员','/public/music/1.mp3','1','04""52"'),
('歌手与演员','/public/music/2.mp3','2','04""52"'),
('歌手与演员','/public/music/3.mp3','3','04""52"'),
('歌手与演员','/public/music/4.mp3','4','04""52"'),
('歌手与演员','/public/music/5.mp3','5','04""52"'),
('歌手与演员','/public/music/6.mp3','6','04""52"');


  DROP VIEW IF EXISTS song_view;
  CREATE VIEW song_view AS
  SELECT  , s.*l.singer AS singer1_singer,l.img_url AS singer1_pic
  FROM song AS s , singer1 AS l
  WHERE l.id=s.aid



DROP TABLE IF EXISTS recommend;
CREATE TABLE recommend(
id INT(12) PRIMARY KEY AUTO_INCREMENT,
name VARCHAR (255),
listener VARCHAR (255),
num VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO recommend (name,listener,num) VALUES
('摔跤吧，爸爸','27万','86首'),
('青春励志歌曲','27万','86首'),
('一人一首成名曲','27万','86首'),
('成名曲','27万','86首');

DROP TABLE IF EXISTS singer_one;
DROP TABLE singer_one(
  id INT (12) PRIMARY KEY AUTO_INCREMENT,
  src VARCHAR (255),
  name VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO singer_one (src,name) VALUES
 ('/public/img/singer1/singer1.jpg','内地偶像组合'),
 ('/public/img/singer1/singer2.jpg','内地男歌手'),
 ('/public/img/singer1/singer3.jpg','港台歌手'),
 ('/public/img/singer1/singer4.jpg','日韩女歌手'),
 ('/public/img/singer1/singer5.jpg','内地女歌手'),
 ('/public/img/singer1/singer6.jpg','青春偶像男歌手');


DROP TABLE IF EXISTS singer1;
CREATE TABLE singer1(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  singer VARCHAR (255),
  src VARCHAR (255),
  number VARCHAR (255),
  cid INT(12),
  content VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO singer1 (singer,src,number,cid,content) VALUES
('蔡妍','/public/img/singer2/neidi1.jpg','382',1,'内地偶像组合'),
('林夕','/public/img/singer2/neidi2.jpg','343',2,'内地男歌手'),
('王妃','/public/img/sisinger2/neidi1.jpg','352',3,'港台歌手'),
('孙燕姿','/public/img/s/singer2/neidi8.jpg','382',3,'港台歌手'),
('张杰','/public/img/singer2/neidi9.jpg','382',3,'港台歌手'),
('王妃','/public/img/singer2/neidi2.jpg','432',4,'日韩女歌手'),
('莫文蔚','/public/img//singer2/neidi8.jpg','382',4,'日韩女歌手'),
('张杰','/public/img/singer2/neidi6.jpg','382',4,'日韩女歌手'),
('林志颖','/public/img/singger2/neidi1.jpg','382',4,'日韩女歌手'),
('王妃','/public/img/singer2/neidi3.jpg','382',5,'内地女歌手'),
('林志颖','/public/img/singer2/neidi8.jpg','382',5,'内地女歌手'),
('张碧晨','/public/img/singer2/neidi2.jpg','382',5,'内地女歌手'),
('王妃','/public/img/singer2/neidi1.jpg','432',6,'青春偶像男歌手');


DROP TABLE IF EXISTS login_check;
CREATE TABLE login_check(
  id INT (12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255),
  password VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO login_check (name,password) VALUES
('admin','e10adc3949ba59abbe56e057f20f883e'),
('longlong','4297f44b13955235245b2497399d7a93')





















--每一条语句都必须写分号   结尾的的语句不需要写逗号
/*
DROP TABLE IF EXISTS cate;
CREATE TABLE cata(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255),
  pic VARCHAR (255)
) DEFAULT CHARSET = utf8;*/
