const jwt = require("jsonwebtoken");
const JWT_SECRET = "sophie";

const authMiddleware = (request, response, next) => {
  const token = request.header("Authorization");

  //Si no hay token responder error 401: acceso denegado
  if (!token) {
    return response.status(401).send({
      error: "¡Acceso denegado!",
    });
  }

  //Validamos token enviado
  try {
    const verify = jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    //Si el token no es valido respodner error 400: invalido
    return response.status(400).send({
      error: "El Token no es valido!",
    });
  }
};

module.exports = { authMiddleware, JWT_SECRET };
