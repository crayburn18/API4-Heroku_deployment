require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json()) // teaches express to parse req.body
server.use(cors())
server.use(helmet())

server.use('*',(req, res, next) => {
    res.json({
        message: 'web44 is awesome indeed'
    })
})

server.listen(process.env.PORT || 5000, () => { //heroku machine uses a different port
    console.log(`listening on ${process.env.PORT || 5000}`)
})