const express = require('express')

const userRoutes = require('./user')
const beritaRouter = require('./berita')
const eventRouter = require('./event')


const router = express.Router()

router.get('/ping', (req, res) => {
    const ready = {
        status: "server is ready"
    }

    res.status(200).send(ready)
})

router.use("/users", userRoutes)

router.use("/berita", beritaRouter)

router.use("/events", eventRouter)

module.exports = router