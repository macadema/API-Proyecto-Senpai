const express = require("express");
const homeRouter = express.Router();

//ENDPINT DE HOME PAGE 
homeRouter.get('/HomePage', (req, res) => {
    res.send('Hola desde HOME PAGE')

});

module.exports=homeRouter;