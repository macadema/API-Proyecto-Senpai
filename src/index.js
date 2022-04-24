const express = require('express');

const api = express();

//console.log('Hola desde NODE')

//CONFIGURO ENDPOINT
api.get('/', (req, res) => {
    res.send('Hola desde NODE')

});

//ENDPINT DE HOME PAGE 
api.get('/HomePage', (req, res) => {
    res.send('Hola desde HOME PAGE')

});

//ENDPOINT DE CONTACTANOS
api.get('/ContactanosPage', (req, res) => {
    res.send('Hola desde CONTSCTANOS PAGE')

});

//ENDPOINT QUIENES SOMOS
api.get('/QuienessomosPage', (req, res) => {
    const infoEmpresa = [
        {
        id: "1",
        titulo: "Acerca de",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim esse illo inventore veniam, voluptas porro ea aut suscipit velit facilis eligendi molestias sit, aliquid saepe nihil minima, accusantium dignissimos laborum? Possimus iusto dolor deserunt, excepturi delectus eligendi molestiae necessitatibus iste quae blanditiis optio culpa dolore ipsa labore libero, quam non rerum aliquam sequi explicabo, accusantium beatae consequatur dignissimos qui! Unde voluptatibus praesentium eligendi ullam tenetur ut rem aliquam earum"
        },

        {
        id: "2",
        titulo: "Mision",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim esse illo inventore veniam, voluptas porro ea aut suscipit velit facilis eligendi molestias sit, aliquid saepe nihil minima, accusantium dignissimos laborum? Possimus iusto dolor deserunt, excepturi delectus eligendi molestiae necessitatibus iste quae blanditiis optio culpa dolore ipsa labore libero, quam non rerum aliquam sequi explicabo, accusantium beatae consequatur dignissimos qui! Unde voluptatibus praesentium eligendi ullam tenetur ut rem aliquam earum"
        },

        {
        id: "3",
        titulo: "Vision",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim esse illo inventore veniam, voluptas porro ea aut suscipit velit facilis eligendi molestias sit, aliquid saepe nihil minima, accusantium dignissimos laborum? Possimus iusto dolor deserunt, excepturi delectus eligendi molestiae necessitatibus iste quae blanditiis optio culpa dolore ipsa labore libero, quam non rerum aliquam sequi explicabo, accusantium beatae consequatur dignissimos qui! Unde voluptatibus praesentium eligendi ullam tenetur ut rem aliquam earum"
        }

    ];
        
    res.send(infoEmpresa);

});
//LEVANTAMOS API Y QUEDO ESCUCHANDO PUERTO
api.listen(4000);
// http:localhost:4000