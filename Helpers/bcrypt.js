const bcrypt = require('bcrypt')
const saltRounds = 10;

function generatePasswordHash(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    return hash
}

function comparePaswwordHash(password, hash) {
    return bcrypt.compareSync(password, hash); 
}

module.exports = {
    generatePasswordHash,
    comparePaswwordHash
}

