const jwt = require("jsonwebtoken");

function verifyAccessToken(request, response, next){
    const authenticateHeader = request.headers.token;
    if(!authenticateHeader) return response.status(403).json("Unauthorized User!");
    
    const token = authenticateHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (error, userCredentials)=>{

        if(error) response.status(403).json("Invalid/Expired Token!");
        request.user = userCredentials;
        next();

    })

}

module.exports = verifyAccessToken;
