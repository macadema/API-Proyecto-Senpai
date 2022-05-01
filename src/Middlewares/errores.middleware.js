const erroresMiddleware = (error, request, response, next) => {
    response.statusCode = 400;
    response.send("OOPS. Ha ocurrido un error");
  };
  
  module.exports = erroresMiddleware;