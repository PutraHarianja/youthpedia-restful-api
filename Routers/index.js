const express = require('express')

const userRoutes = require('./user')
const bookRouter = require('./book')
const orderRouter = require('./order')
const auth = require('../Middleware/auth')


const router = express.Router()

router.get('/ping', (req, res) => {
    const ready = {
        status: "server is ready"
    }

    res.status(200).send(ready)
})

router.use("/users", userRoutes)

router.use("/books", auth.login, bookRouter)

router.use("/orders", auth.login, orderRouter)

module.exports = router