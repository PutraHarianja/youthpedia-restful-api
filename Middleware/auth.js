const jwt = require('../Helpers/jwt')

function login(req, res, next) {

    try {
        const token = req.headers.authorization
        const result = token.replace("Bearer", "").trim()

        const data = jwt.verifyToken(result)
        req.loggedUser = data
        return next()
    } catch (error) {
        res.status(401).send("unauthorized")
    }
}

function isAdmin(req, res, next){

    if(req.loggedUser.role === 'admin'){
        return next()
    }

    res.status(403).send("forbidden")
}


module.exports = {
    login,
    isAdmin
}