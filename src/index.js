const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

//Levantar variables de entorno
//require("dotenv").config();

//Creamos nuestra API
const api = express();

//Requerimos los routers
const authRouter = require("./routes/auth.router");
const proyectosRouter = require("./routes/proyectos.router");
const contactanosRouter = require("./routes/contactanos.router");
const homeRouter = require("./routes/home.router");
const quienesSomosRouter = require("./routes/quienessomos.router");

//Requerimos Middlewares

const loggerMiddleware = require("./middlewares/logger.middleware");
const notFoundMiddleware = require("./middlewares/not-found.middleware");
const erroresMiddleware = require("./middlewares/errores.middleware");

//Habilitamos acceso a las imagenes en public/uploads
api.use(express.static(path.join(__dirname, "..", "public")));

//HABILITO CORS y body parser
api.use(cors());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

//USAMOS LOS MIDDLEWARE

//USAMOS LOS ROUTERS
//api.use("/auth", authRouter);
//api.use("/Proyectos", proyectosRouter);
api.use("/contactanospage", contactanosRouter);
api.use("/homepage", homeRouter);
api.use("/quienessomospage", quienesSomosRouter);

//CONFIGURO ENDPOINT
api.get('/', (req, res) => {
    res.send('Hola desde NODE')

});

//USAMOS MIDDLEWARES PARA CONTROL DE ERRORES

api.all("/*", notFoundMiddleware);
api.use(erroresMiddleware);

//LEVANTAMOS API Y QUEDO ESCUCHANDO PUERTO
api.listen(4000, () => {
    console.log("SI ME VES, VENIMOS BIEN! ");
});
// http:localhost:4000
