const mongoose = require('mongoose')

// Create schemas
const userSchema = new mongoose.Schema({
    // "name": "string",
    // "username": "string",
    // "password": "hash(string)",
    // "email": "string",
    // "role": "string"
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: "user"
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel