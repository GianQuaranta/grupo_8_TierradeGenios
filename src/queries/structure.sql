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

CREATE TABLE categoriesPrivileges (
    id  INT AUTO_INCREMENT NOT NULL,
    category_id  INT NOT NULL,
    privilege_id  INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories (id),
    FOREIGN KEY (privilege_id) REFERENCES privileges (id)
);

CREATE TABLE mediosDePago (
  id INT AUTO_INCREMENT NOT NULL,
  medioDePago VARCHAR(100) NOT NULL,
  PRIMARY KEY(id) );
  
CREATE TABLE userMediosDePago (
  id INT AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL,
  medioDePagoId INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (medioDePagoId) REFERENCES mediosDePago(id));

CREATE TABLE donations (
  id INT AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity_donate INT NOT NULL,
  date DATE NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);