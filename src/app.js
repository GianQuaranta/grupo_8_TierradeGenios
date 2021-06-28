const express = require ("express");
const app = express();
const path = require('path');

/*Requerimiento de archivos de rutas*/
const mainRoute = require('./routes/mainRoute')
const products = require('./routes/productRoute');
const applyScholarship = require('./routes/applyScholarshipRoute')
const cart = require('./routes/cartRoute');
const userController = require ('./routes/userRoute')

/*Configuración template engine*/
app.set('view engine' , 'ejs');

app.set('views', path.resolve(__dirname, './views') )


/*Configuración puerto servidor*/
app.set("port",process.env.PORT || 3000)
app.listen(app.get("port"),()=>console.log("Server Start http://localhost:"+app.get("port")))


/*Express static*/
app.use(express.static(path.resolve(__dirname,"../Public")));


/*app.use de todos*/
app.use(mainRoute);
app.use(applyScholarship);
app.use(products);
app.use(cart);
app.use(userController);

