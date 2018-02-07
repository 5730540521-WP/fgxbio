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
  console.log('Reach Search')
  var output = '<html><head></head><body><h1>Search</h1><h2>Begin'  

  await con.query('SELECT * FROM ngs_data WHERE Sample_ID = "032F" && DataType ="A"',
            function(err,rows){
                if(err) 
                  throw err
                
                output += rows[0].Sample_ID
                console.log(rows[0])
                
  })
  output += '</h2></body></html>'
  console.log(output)
  res.send(output)
  next()
})

router.get('/manual', (req, res, next) => {
  console.log('Manual input search')
  res.send('<html><head></head><body><h1>Manual Box Box Box</h1></body></html>')
})

router.get('/:id',async (req, res, next) => {
  try {
    console.log(req.params.id)
    const admin = await authServ.authenticateAdmin(req.params.id)
  
  } catch (error) {
    next(error)
  }
})

module.exports = router