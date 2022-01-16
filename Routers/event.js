const express = require('express')

const EventController = require("../Controllers/event.controller")

const router = express.Router()
const auth = require('../Middleware/auth')

// Create User
router.post('/', auth.login,EventController.createNewEvent)
// Get User by ID
router.get('/:id_event', EventController.getEventbyId)
// Update User
router.put('/:id_event', auth.login, EventController.updateEventbyId)
// List User
router.get('/', EventController.getAllEvents)
// Delete User
router.delete('/:id_event', auth.isAdmin, EventController.deleteEventbyId)

module.exports = router