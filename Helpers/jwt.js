
const jwt = require('jsonwebtoken')

function generateToken(claims) {
    var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (6* 60 * 60),
        data: claims
    }, process.env.JWT_SECRET)

    return token
}

function verifyToken(token) {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded.data
}

module.exports = {
    generateToken,
    verifyToken
}