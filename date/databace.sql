  DROP TABLE IF EXISTS register;
  CREATE TABLE register(
    id INT(12) PRIMARY KEY AUTO_INCREMENT,
    phone  VARCHAR (255),
    code VARCHAR (255),
    password VARCHAR (255),
    password_one VARCHAR (255)
  )DEFAULT CHARSET = utf8;
  INSERT INTO register (phone,code,password,password_one) VALUES
  ('18303473646','1234','wangshiyu','wangshiyu'),
  ('18303473647','1234','wangshiyu1','wangshiyu1'),
  ('18303473648','1234','wangshiyu2','wangshiyu2'),
  ('18303473649','1234','wangshiyu3','wangshiyu3');

    DROP TABLE IF EXISTS email;
    CREATE TABLE email(
      id INT(12) PRIMARY KEY AUTO_INCREMENT,
      email  VARCHAR (255),
      password3 VARCHAR (255),
      password4 VARCHAR (255)
    )DEFAULT CHARSET = utf8;
    INSERT INTO email (email,password3,password4) VALUES
    ('1343631004@qq.com','wangshiyu','wangshiyu');

