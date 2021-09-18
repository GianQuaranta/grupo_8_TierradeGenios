const express = require ("express");
const app = express();
const path = require('path');
const method = require("method-override")
const session = require('express-session');
const cookie = require('cookie-parser');



/*Requerimiento de archivos de rutas*/
const mainRoute = require('./routes/mainRoute')
const products = require('./routes/productRoute');
const applyScholarship = require('./routes/applyScholarshipRoute')
const cart = require('./routes/cartRoute');
const userRoutes = require('./routes/users')


// API - Requerimiento de archivos de rutas 

const apiProduct = require('./routes/api/apiProductRoute');
const apiUser = require('./routes/api/apiUserRoute');


/*Configuración template engine*/
app.set('view engine' , 'ejs');

app.set('views', path.resolve(__dirname, './views') )


/*Configuración puerto servidor*/
app.set("port",process.env.PORT || 3000);   
app.listen(app.get("port"),()=>console.log("Server Start http://localhost:" + app.get("port")))


/*Express static*/
app.use(express.static(path.resolve(__dirname,"../Public")));

//method-override
app.use(express.urlencoded({extended:false}));
app.use(method("_method"));

//Cookie y Session //
app.use(cookie());
app.use(session({secret:'Tierra de genios', 
resave: false, saveUninitialized:true})
);

// LoggedMiddleware //
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
app.use(userLoggedMiddleware)

/*app.use de todos*/
app.use(mainRoute);
app.use(applyScholarship);
app.use("/products",products);
app.use(cart);
app.use("/user",  userRoutes);


// apiApp.use

//app.use(apiProduct);
app.use(apiUser);








