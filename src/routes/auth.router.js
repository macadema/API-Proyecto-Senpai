const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Requerir mi jwt-secret
const { JWT_SECRET } = require("./../middlewares/auth.middleware");

//Creamos el router
const authRouter = express.Router();

const usuarios = [
  {
    email: "sofia@sophieinteriores.com",
    password: "contrasenaencryptada",
  },
  ];

authRouter.post("/login", async (request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  //Busco si hay un usuario con el correo envíado
  const usuario = usuarios.find((usarioBD) => {
    return usarioBD.email === email;
  });

  //Sii el usuario no existe: Muestro error
  if (!usuario) {
    return response.status(400).send({
      error: "El usuario ingresado no existe. POr favor intenta de nuevo",
    });
  }

  //Comparar si es la misma clave que nos mandaron desde la UI
  const esIgualPassword = await bcrypt.compare(password, usuario.password);
  if (!esIgualPassword) {
    return response.status(400).send({
      error: "La contrasena no es correcta. Por favor intenta de nuevo",
    });
  }

  //SI el usuario se autentica: Generar un jwt
  const token = jwt.sign(
    {
      email: usuario.email,
    },
    JWT_SECRET
  );

  //Login éxito el usuario existe y la clave es la misma
  response.send({
    error: null,
    mensage: "¡Login correcto!",
    token: token,
  });
});

module.exports = authRouter;
