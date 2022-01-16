const mongoose = require('mongoose')

// Create schemas
const eventSchema = new mongoose.Schema({
    // "id_event": "string, unique",
    // "title": "string",
    // "description": "string",
    // "location": "string",
    // "schedule": "datetime"

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    schedule: {
        type: Date,
        required: true,
    }
})

const eventModel = mongoose.model('Events', eventSchema)

module.exports = eventModel