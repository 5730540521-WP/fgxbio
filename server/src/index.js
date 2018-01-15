const http = require('http')
const express = require('express')

let app = express()
app.server = http.createServer(app)

module.exports = app