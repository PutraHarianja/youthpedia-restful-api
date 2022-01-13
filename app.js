const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

// const router = require('./Routes')
const port = process.env.PORT || 3000
const db = require('./Helpers/db')

async function main() {

    try {
        await db

        const app = express()
        app.use(express.json())
        
        // app.use(router)

        // router.get('/', (req, res) => {
        //     res.send({ welcome: "Welcome to toko-pintar API"})         
        // })

        app.listen(port, () => {
            console.log('server is listening on', port)
        })
    } catch (error) {
        console.log(error)
    }

}

main()