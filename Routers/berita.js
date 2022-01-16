const express = require('express')

const BeritaController = require("../Controllers/berita.controller")

const router = express.Router()
const auth = require('../Middleware/auth')

// Create User
router.post('/', auth.login,BeritaController.createNewBerita)
// Get User by ID
router.get('/:id_berita', BeritaController.getBeritabyId)
// Update User
router.put('/:id_berita', auth.login, BeritaController.updateBeritabyId)
// List User
router.get('/', BeritaController.getAllBeritas)
// Delete User
router.delete('/:id_berita', auth.isAdmin, BeritaController.deleteBeritabyId)

module.exports = router