const { version } = require('../../package.json')
const { Router } = require('express')

const searchRoute = require('./search')
const resourceRoute = require('./resource')

const authServ = require('../services/auth')

const _ = require('lodash')

let api = Router()

api.use('/search', searchRoute)
api.use('/resource', resourceRoute)

api.get('/',  (req, res) => {
  //res.send('<html><head></head><body><h1>Main FGXBiO</h1></body></html>')
  res.json({ version })
})

api.post('/admin-auth', async (req, res, next) => {
  try {
    const { username, password } = req.body
    await authServ.authenticateAdmin({ username: 'Admin01', password: '12345' })
    res.json({ })
    console.log('why u run this shit')
  } catch (error) {
    next (error)
  }
})

api.post('/signout', (req, res, next) => {
  res.json('signout successful')
})

module.exports = api
