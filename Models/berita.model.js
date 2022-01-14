const mongoose = require('mongoose')

// Create schemas
const beritaSchema = new mongoose.Schema({
    // "berita_id": "ObjectID",
    // "title": "string",
    // "description": "string",
    // "picture": "string",
    // "category": "string",
    // "source": "string",
    // "comment": "ArrayofComment",
    // "trend": "boolean"

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    source: {
        type: String,
    },
    comments: [{
        comment: {
            type: String,
        }
    }],
    trend: {
        type: Boolean,
        default: false,
    },
})

const beritaModel = mongoose.model('Beritas', beritaSchema)

module.exports = beritaModel