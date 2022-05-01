const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const api = express();

//HABILITO CORS
api.use(cors());


//CONFIGURO ENDPOINT
api.get('/', (req, res) => {
    res.send('Hola desde NODE')

});

//ENDPINT DE HOME PAGE 
api.get('/HomePage', (req, res) => {
    res.send('Hola desde HOME PAGE')

});

//ENDPINT DE PROYECTOS
api.get('/Proyectos', (req, res) => {
    const proyectos = [
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
    res.send(proyectos)

});

//ENDPINT DE PROYECTOS
api.get('/Proyectos/:proyectoId', (req, res) => {
    let resultado = {};
    
    //obtengo proyecto ID de la ruta
    const proyectoId = request.params.proyectoId;

    //busco ese proyecto por su ID
  /*  proyectos.forEach((proyecto) =>{
        if(proyecto.id == proyectoId)
    });*/
    
    res.send(resultado)

});

//ENDPOINT DE CONTACTANOS
api.get('/ContactanosPage', (req, res) => {

    res.send('Hola desde CONTSCTANOS PAGE')

});

api.post('/ContactanosPage', (req, res) => {
    const datos = req.body;
    console.log(datos);
    res.send('Hola desde CONTSCTANOS PAGE');

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

//ENDPINT DE URL EQUIVOCADA
api.get('/*', (req, res) => {
    res.statusCode = 404;
    res.send({
        mensaje: 'OOPS. La direccion que ingresaste no es correcta'})

});

//ERROR PARA PISAR CONTROLADOR DE ERROR POR DEFECTO DE EXPRESS

api.use((response, request, next) => {
    response.statusCode = 400;
    response.send('ERROR');
});

//LEVANTAMOS API Y QUEDO ESCUCHANDO PUERTO
api.listen(4000);
// http:localhost:4000