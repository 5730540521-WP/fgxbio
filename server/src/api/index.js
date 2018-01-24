const { version } = require('../../package.json')
const { Router } = require('express')

const searchRoute = require('./search')

const _ = require('lodash')

let api = Router()

api.use('/search', searchRoute)


api.get('/',  (req, res) => {
  console.log('reach')
  res.send('<html><head></head><body><h1>Main</h1></body></html>')
  console.log('we get here')
})

api.get('/dog', (req, res) => {
  res.send('<html><head></head><body><h1>Doggy</h1></body></html>')
})

module.exports = api
