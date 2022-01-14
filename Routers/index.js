const express = require('express')

const userRoutes = require('./user')
const beritaRouter = require('./berita')
// const orderRouter = require('./order')
const auth = require('../Middleware/auth')


const router = express.Router()

router.get('/ping', (req, res) => {
    const ready = {
        status: "server is ready"
    }

    res.status(200).send(ready)
})

router.use("/users", userRoutes)

router.use("/berita", beritaRouter)

// router.use("/orders", auth.login, orderRouter)

module.exports = router