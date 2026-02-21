const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){ // This is a middleware function that will be used to protect routes that require authentication
    // Get token from header.this is the token that we will send from the frontend when making a request to a protected route. It should be in the format "Bearer <token>"

    const token = req.headers.authorization;

    if(!token)
        return res.status(401).json("Access denied");

    try{

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verified;

        next();

    }catch(err){

        res.status(400).json("Invalid Token");

    }

}