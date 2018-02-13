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
          res.json(rows)
      })
    } catch (error) {
      next(error)
    }
})

router.get('/statistic/:locus', async (req, res, next) => {
  // Get Locus and GO
  try {
    await con.query(`SELECT * FROM ngs_data WHERE Locus = '${req.params.locus}'`,
            function(err, rows){
                if(err)
                  throw err
                res.send(rows)
    })
    } catch (error) {
      next(error)
    }
})

router.get('/details', (req, res, next) => {


})

router.get('/marker/:locus/:allele',async (req, res, next) => {
  try {
    await con.query(`SELECT COUNT(*) AS total FROM ngs_data WHERE Locus = '${req.params.locus}'`,
      function (err, rows){
        if(err)
          throw (err)
        var total = rows[0].total
        total = parseInt(total)
          console.log(total)
          console.log(req.params.allele)
      })
    await con.query(`SELECT COUNT(*) AS interest FROM ngs_data WHERE Locus = '${req.params.locus}' && Allele = '${req.params.allele}'`,
      function (err, rows){
        if(err)
          throw (err)
        var interest = rows[0].interest
        interest = parseInt(interest)
          console.log(parseInt(interest)*100/parseInt(total))
      }
  )
  } catch (error) {
    next (error)
  }
})

module.exports = router