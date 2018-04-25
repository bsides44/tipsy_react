const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const router = require('./routes/routes')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


// const posts = require('./routes/posts')

// const comments = require('./routes/comments')

server.use('/api/v1', router)
// server.use('/v1/comments', comments)

module.exports = server