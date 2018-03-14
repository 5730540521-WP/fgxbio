const { version } = require('../../package.json')
const { Router } = require('express')
const PythonShell = require('python-shell')
const jwt = require('jsonwebtoken')
const util = require('util')



const searchRoute = require('./search')
const resourceRoute = require('./resource')
const con = require('../config/constant')

const authServ = require('../services/auth')

const _ = require('lodash')

let api = Router()

api.use('/search', searchRoute)
api.use('/resource', resourceRoute)


api.post('/auth',async (req, res, next) => {
  try{
    const { username, password } = req.body
    con.query(`SELECT * FROM admins WHERE Username = '${username}' && Pass = '${password}'`,
      function(err, rows){
        if(err)
          throw(err)
        res.json({ token: jwt.sign({ User_ID: rows[0].User_ID }, 'FGXBIO_ADMIN') })
      })
  } catch (error) {
    next(error)
  }
  //should have finished
})

api.post('/signout', (req, res, next) => {
  res.send('signout successful')
})


api.get('/',  (req, res) => {
  res.json({ version })
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
