const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)

const conn = mongoose.connection;

conn.on('connected', () => {
    console.log('database is connected successfully')
})

conn.on('disconnected', () => {
    console.log('database is disconnected successfully')
})

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;
