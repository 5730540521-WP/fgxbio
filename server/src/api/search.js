const { Router }  = require('express')
const _ = require('lodash')
const mysql = require('mysql')

const authServ = require('../services/auth')

let router = Router()

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Uq42=Tc8",
  database: "fxbio"
})

router.get('/',async (req, res, next) => {
  
  await con.query('SELECT * FROM ngs_data WHERE Sample_ID = "032F" && DataType ="A"',
            function(err,rows){
                if(err) 
                  throw err
                console.log(rows[1])                
  })
  res.send('search Page')
  next()
})

router.get('/manual', (req, res, next) => {
  res.send('<html><head></head><body><h1>Manual Box Box Box</h1></body></html>')
})

router.get('/done',async (req, res, next) => {
  try {
    console.log(req.params.id)
    const admin = await authServ.authenticateAdmin(req.params.id)
  
  } catch (error) {
    next(error)
  }
})

module.exports = router