const jwt = require("jsonwebtoken");
const { createError } = require("./errorHandler.js");

function verifyAccessToken (request, response, next) {
    const token = request.cookies.access_token;
    if (!token) {
      return next(createError(401, "Unauthhorized User!"));
    }
  
    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
      if (error) return next(createError(403, "Invalid/Expired Token!"));
      request.user = user;
      next();
    });
};

function verifyUser (request, response, next) {

    verifyAccessToken(request, response, next, () => {

      if (request.user.id === request.params.id)  //checks user id hidden in jwt token
        next();
      else {return next(createError(403, "You are not authorized!"));}
      
    });
};

module.exports = {
    verifyAccessToken,
    verifyUser
}

