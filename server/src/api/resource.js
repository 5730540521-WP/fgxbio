const { Router } = require('express')
const _ = require('lodash')
const mysql = require('mysql')

let router = Router()

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Uq42=Tc8",
  database: "fxbio"
})

router.get('/geographical', (req, res, next) => {
  // North South East West
  
  console.log('search by REGION')
  res.json('NORTH SOUTH EAST WEST')
})

router.get('/statistic', async (req, res, next) => {
  // Get Locus and GO
  try {
    const locus = await con.query('SELECT DISTINCT Locus FROM ngs_data',
      function (err, rows){
        if(err)
          throw (err)
        
          console.log(rows)
          res.json(rows)
      })
    } catch (error) {
      next(error)
    }
})

router.get('/details', (req, res, next) => {


})

router.get('/marker/:locus',async (req, res, next) => {
  try {
    const temp = await con.query(`SELECT COUNT (*) AS total FROM ngs_data WHERE Locus = '${req.params.locus}'`,
      function (err, rows){
        if(err)
          throw (err)
        total = rows[0].total
          console.log(total)
      })
  } catch (error) {
    next (error)
  }
})

module.exports = router