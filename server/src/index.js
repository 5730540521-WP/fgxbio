const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const mysql = require('mysql')

const config = require('./config')
const api = require('./api')

const authServ = require('./services/auth')

let app = express()
app.server = http.createServer(app)

app.use(morgan('dev'))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'src')))
// middleware

app.use('/', api)

app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status)
  res.json({ error: err.message })
})

app.server.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${app.server.address().port}`)
})

module.exports = app