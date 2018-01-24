const { Router }  = require('express')
const _ = require('lodash')
const mysql = require('mysql')

let router = Router()

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Uq42=Tc8",
  database: "fxbio"
})

router.get('/', (req, res, next) => {
  console.log('Reach Search')
  var output = '<html><head></head><body><h1>Search</h1><h2>Begin'  

  con.query('SELECT * FROM ngs_data WHERE Sample_ID = "032F" && DataType ="A"',
            function(err,rows){
                if(err) 
                  throw err
                
                output += rows.Sample_Year
                console.log(rows)
            }
  )
  output += '</h2></body></html>'
  console.log(output)
  res.send(output)
  next()
})

router.get('/manual', (req, res, next) => {
  console.log('Manual input search')
  res.send('<html><head></head><body><h1>Manual Box Box Box</h1></body></html>')
  


})

module.exports = router