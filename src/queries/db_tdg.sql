

DROP DATABASE IF EXISTS db_tdg;
CREATE DATABASE db_tdg;
USE db_tdg;


CREATE TABLE categories (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    color VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE privileges (
    id INT AUTO_INCREMENT NOT NULL,
    privilege VARCHAR(150) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(250) NOT NULL,
    min INT NOT NULL,
    max INT NOT NULL,
    category_id INT NOT NULL,
    rango INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories (id)
);
CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    birthDate DATE NOT NULL,
    adress VARCHAR(150) NOT NULL,
    phoneNumber BIGINT NOT NULL,
    country VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    medioDePago VARCHAR(100) DEFAULT NULL,
    avatar VARCHAR(250) NOT NULL,
  	isAdmin TINYINT(1) NOT NULL,
  
    PRIMARY KEY (id)
);

CREATE TABLE categories_privileges (
    id  INT AUTO_INCREMENT NOT NULL,
    category_id  INT NOT NULL,
    privilege_id  INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories (id),
    FOREIGN KEY (privilege_id) REFERENCES privileges (id)
);

CREATE TABLE medios_de_pago (
  id INT AUTO_INCREMENT NOT NULL,
  medio_de_pago VARCHAR(100) NOT NULL,
  PRIMARY KEY(id) );
  
  CREATE TABLE user_medios_de_pago (
   id INT AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    medio_de_pago_id INT NOT NULL,
  	PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (medio_de_pago_id) REFERENCES medios_de_pago(id) );

INSERT INTO privileges (id,privilege)
VALUES (1, 'Acceso al tablero de becados propio.'), (2,'Acceso al flujo de dinero.'),(3,'Certificado digital.'),
(4,'Acceso al tablero de becados universal.'),(5,'Participación en la selección de becados.');



INSERT INTO users (id,firstName, lastName,email,birthDate,avatar,adress,phoneNumber,country,password,
medioDePago,isAdmin)
VALUES (1,'joaco','gil','j@gmail.com','2019-12-19','avatar-1627340393479.png','tandil 1544',33513270775,'Argentina', '$2a$10$v4H6JbOqUbNC4C9d5/Zzr.ImCisl9eP8do1ahU6.Tps8a/s7v20/y',
'paypal',0),(2,'joaco','rodriguez','ja@gmail.com','2019-12-19','avatar-1627340393479.png','tandil 1544',33513270775,'Argentina', '$2a$10$v4H6JbOqUbNC4C9d5/Zzr.ImCisl9eP8do1ahU6.Tps8a/s7v20/y',
'paypal',0),(3,'gian','quaranta','gianquarantaa@gmail.com', '2009-08-20', 'avatar-1627340393479.png','Gral Paz 2016',
 3321442123,'Argentina','$2a$10$v4H6JbOqUbNC4C9d5/Zzr.ImCisl9eP8do1ahU6.Tps8a/s7v20/y','paypal',1);

INSERT INTO categories(id, name, color) 
VALUES(1,'Bronce' ,'brown'),(2,'Plata','grey'),(3,'Oro','gold');

INSERT INTO categories_privileges(id,category_id,privilege_id)
VALUES(1,1,1),(2,1,2),(3,1,3),(4,2,1),(5,2,2),(6,2,3),(7,2,4),(8,3,1),(9,3,2),(10,3,3),(11,3,4),(12,3,5);

INSERT INTO products(id,name,image,min,max,category_id,rango)
VALUES(1,'Ciudadano emblema','default.png',1,50,1,1),(2,'Ciudadano ilustre','default.png',51,100,1,1),(3,'Patriota',
 'default.png',101,150,1,1),(4,'Icono','default.png',151,200,2,2),(5,'Eminencia','default.png',201,150,2,2),(6,'Prócer','default.png',
   251,300,2,2),(7,'Magno','default.png',301,350,3,3),(8,'Egregio','default.png',351,400,3,3) ; 
   
INSERT INTO medios_de_pago ( id, medio_de_pago )
VALUES (1 , 'paypal'),(2,'transferencia'),(3,'tarjeta'),(4,'bitcoint');

INSERT INTO user_medios_de_pago (id, user_id, medio_de_pago_id)
VALUES (1, 1,1 ),(2,2,1);