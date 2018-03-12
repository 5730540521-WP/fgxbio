const { version } = require('../../package.json')
const { Router } = require('express')
const PythonShell = require('python-shell')

const util = require('util')



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

  } catch (error) {
    next (error)
  }
})

api.post('/signout', (req, res, next) => {
  res.json('signout successful')
})

api.get('/python', (req, res, next) => {
  const { spawn } = require('child_process')
  const pyProg = spawn('python', ['./oest.py'])

  console.log(__dirname);
  
  pyProg.stdout.on('data', function(data) {

    console.log(data.toString());
    res.write(data);
    res.end('end');
  });

})

module.exports = api
