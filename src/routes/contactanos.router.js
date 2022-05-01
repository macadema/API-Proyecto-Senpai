const express = require("express");
const contactanosRouter = express.Router();

//Requiero auth middleware para controlar el POST del formulario
const  {authMiddleware} = require("./../Middlewares/auth.middleware");

//ENDPOINT DE CONTACTANOS
contactanosRouter.get('/ContactanosPage', (req, res) => {

    res.send('Hola desde CONTSCTANOS PAGE')

});

contactanosRouter.post('/ContactanosPage', authMiddleware, (req, res) => {
    const datos = req.body;
    console.log(datos);
    res.send('Hola desde CONTSCTANOS PAGE');

});

module.exports=contactanosRouter;