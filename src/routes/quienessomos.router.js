const express = require("express");
const quienesSomosRouter = express.Router();

//ENDPOINT QUIENES SOMOS
quienesSomosRouter.get("/quienessomospage", (req, res) => {
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

module.exports = quienesSomosRouter;