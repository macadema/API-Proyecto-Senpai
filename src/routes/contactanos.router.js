const express = require("express");
const contactanosRouter = express.Router();

//ENDPOINT DE CONTACTANOS
contactanosRouter.get('/ContactanosPage', (req, res) => {

    res.send('Hola desde CONTSCTANOS PAGE')

});

contactanosRouter.post('/ContactanosPage', (req, res) => {
    const datos = req.body;
    console.log(datos);
    res.send('Hola desde CONTSCTANOS PAGE');

});

module.exports=contactanosRouter;