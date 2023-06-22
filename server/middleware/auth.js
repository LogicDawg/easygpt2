const {SECRET_KEY} = require("../config");
const {ExpressError} = require("../expressError")
const jwt = require("jsonwebtoken")

function authenticateJWT(req,res,next){
    try {
        const payload =jwt.verify(req.body._token,SECRET_KEY)
        req.user = payload;
        console.log("You have a valid token")
        return next();
    } catch (e) {
        return next();
    }
}

function ensureLoggedIn(req,res,next){
    if(!req.user){
        const e = new ExpressError("Unauthorized",401)
        return next(e);
    }else {
        return next();
    }
}


function ensureAdmin(req,res,next){
    if(!req.user || req.user.is_admin === 'false'){
        return next(new ExpressError("Unauthorized User, must be an admin",401))
    }
    return next();
}
module.exports={authenticateJWT,ensureLoggedIn,ensureAdmin}