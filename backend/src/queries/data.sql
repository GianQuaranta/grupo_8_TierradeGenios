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

INSERT INTO categoriesPrivileges(id,category_id,privilege_id)
VALUES(1,1,1),(2,1,2),(3,1,3),(4,2,1),(5,2,2),(6,2,3),(7,2,4),(8,3,1),(9,3,2),(10,3,3),(11,3,4),(12,3,5);

INSERT INTO products(id,name,image,min,max,category_id,rango)
VALUES(1,'Ciudadano emblema','default.png',1,50,1,1),(2,'Ciudadano ilustre','default.png',51,100,1,1),(3,'Patriota',
 'default.png',101,150,1,1),(4,'Icono','default.png',151,200,2,2),(5,'Eminencia','default.png',201,150,2,2),(6,'Prócer','default.png',
   251,300,2,2),(7,'Magno','default.png',301,350,3,3),(8,'Egregio','default.png',351,400,3,3) ; 
   
INSERT INTO mediosDePago ( id, medioDePago )
VALUES (1 , 'paypal'),(2,'transferencia'),(3,'tarjeta'),(4,'bitcoint');

INSERT INTO userMediosDePago (id, user_id, medioDePagoId)
VALUES (1, 1,1 ),(2,2,1);