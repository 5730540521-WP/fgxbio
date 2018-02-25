const { version } = require('../../package.json')
const { Router } = require('express')
const pythonShell = require('python-shell')

const searchRoute = require('./search')
const resourceRoute = require('./resource')

const authServ = require('../services/auth')

const _ = require('lodash')

let api = Router()

api.use('/search', searchRoute)
api.use('/resource', resourceRoute)

api.get('/',  (req, res) => {
   res.json({ version })
})

api.get('/admin-auth', async (req, res, next) => {
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

api.get('/python', (req, res, next) => {
  pythonShell.run('test.py', function(err){
    if (err)
      console.log('error')
    console.log('finished')
  })
  res.json('finish')
})

module.exports = api
