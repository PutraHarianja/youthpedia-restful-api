const express = require('express')

const UserController = require("../Controllers/user.controller")

const router = express.Router()

// Create User
router.post('/', UserController.createNewUser)
router.post('/login', UserController.login)
router.get('/profile', UserController.userProfile)

module.exports = router