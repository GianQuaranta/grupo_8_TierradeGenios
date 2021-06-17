const express = require ("express");
const app = express();
const path = require('path');

/*Requerimiento de archivos de rutas*/
const mainRoute = require('./routes/mainRoute')
const productDetail = require('./routes/productRoute');
const applyScholarship = require('./routes/applyScholarshipRoute')
const cart = require('./routes/cartRoute');

/*Configuración template engine*/
app.set('view engine' , 'ejs');


/*¿Qué es esto? Agregar etiqueta*/
app.set('views', path.resolve(__dirname, './views') )


/*Configuración puerto servidor*/
app.set("port",process.env.PORT || 3000)
app.listen(app.get("port"),()=>console.log("Server Start http://localhost:"+app.get("port")))


/*Express static*/
app.use(express.static(path.resolve(__dirname,"../Public")));


/*app.use de todos*/
app.use(mainRoute);
app.use(applyScholarship);
app.use(productDetail);
app.use(cart);






/*FALTAN HACER*/ 

/*
app.get("/productDetail", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "productDetail.html")));

app.get("/productCart", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "productCart.html")));

app.get("/register", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "register.html")));

app.get("/login", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "login.html")));

app.get("/contrasenia", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "contrasenia.html")));

*/
