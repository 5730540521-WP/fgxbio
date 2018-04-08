const { version } = require('../../package.json')
const { Router } = require('express')
const jwt = require('jsonwebtoken')
const util = require('util')

const child_proc = require('child_process')

const searchRoute = require('./search')
const resourceRoute = require('./resource')
const adminRoute = require('./admin')
const con = require('../config/constant')

const authServ = require('../services/auth')

const _ = require('lodash')

let api = Router()

api.use('/search', searchRoute)
api.use('/resource', resourceRoute)
api.use('/admin', adminRoute)

api.post('/auth', (req, res, next) => {
  const { username, password } = req.body
  con.query(`SELECT * FROM admins WHERE Username = '${username}' && Pass = '${password}'`,
      function(err, rows){
        if(err)
          throw(err)
        if(rows.length > 0)
          res.json({ token: jwt.sign({ User_ID: rows[0].User_ID }, 'FGXBIO_ADMIN') })
        else
          res.send('Not Found')
          
      })
  //should have finished
})

api.post('/signout', (req, res, next) => {
  console.log(req.body)
  res.send('signout successful')
})


api.get('/',  (req, res) => {
  res.json({ version })
})


api.post('/excel', (req, res, next) => {
  if(req.files){
    console.log(req.files)
  }
})

api.get('/python', (req, res, next) => {
  console.log(__dirname)
  child_proc.exec(`python ${__dirname}/test.py`, function(err) {
    if(err){
      console.log("child process failed with error : " + err)
      res.status(400).send('error');
    }
    console.log('PROCESS DONE');
    res.send('complete');
  })
})

module.exports = api
