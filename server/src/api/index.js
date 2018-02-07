const { version } = require('../../package.json')
const { Router } = require('express')

const searchRoute = require('./search')
const resourceRoute = require('./resource')

const _ = require('lodash')

let api = Router()

api.use('/search', searchRoute)
api.use('/resource', resourceRoute)

api.get('/',  (req, res) => {
  console.log('Main Page')
  res.send('<html><head></head><body><h1>Main FGXBiO</h1></body></html>')
})

module.exports = api
