const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server


// const posts = require('./routes/posts')
// const comments = require('./routes/comments')

// server.use('/v1/posts', posts)
// server.use('/v1/comments', comments)