const express = require ("express");
const app = express();
const path = require('path');

app.listen(3030, () => console.log("Servidor corriendo"));

app.use(express.static(path.resolve(__dirname,"./Public")));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "index.html")));

app.get("/productDetail", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "productDetail.html")));

app.get("/productCart", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "productCart.html")));

app.get("/register", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "register.html")));

app.get("/login", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "login.html")));

app.get("/about-us", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "about-us.html")));

app.get("/apply-scholarship", (req,res) => res.sendFile(path.resolve(__dirname, "./views/", "apply-scholarship.html")));


