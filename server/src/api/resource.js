const { Router } = require('express')
const _ = require('lodash')

let router = Router()

const con = require('../config/constant')




router.get('/region', (req, res, next) => {
  // North South East West
  
  console.log('search by REGION')
  res.json('NORTH SOUTH EAST WEST')
})

router.get('/locuslist', async (req, res, next) => {
  // Get Locus and GO
  try {
    con.query('SELECT DISTINCT Locus FROM ngs_data',
      function (err, rows){
        if(err)
          throw (err)
          res.json(rows)
      })
    } catch (error) {
      next(error)
    }
})

router.get('/locuslist/amount', async (req, res, next) => {
  try{
    con.query('SELECT Locus, COUNT(*) as Amount FROM ngs_data GROUP BY Locus',
      function( err, rows){
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
    con.query(`SELECT Allele, COUNT(*) AS amount FROM ngs_data WHERE Locus = '${req.params.locus}' GROUP BY Allele`,
            function(err, rows){
                if(err)
                  throw err
                res.send(rows)
    })
    } catch (error) {
      next(error)
    }
})

router.get('/hetero', async(req, res, next) => {
  try {
    con.query(`SELECT a.Locus, COUNT(*) AS Amount FROM (SELECT Sample_Year, Sample_ID,Locus, COUNT(*) AS Amount FROM ngs_data GROUP BY Locus, Sample_Year, Sample_ID) a WHERE a.Amount = 2 GROUP BY a.Locus;`,
      function(err, rows){
        if(err)
          throw err
        res.json(rows)
    })
    //it just didn't send
  } catch (error) {
    next(error)
  }
})


//get percentage of that allele on locus
router.get('/marker/:locus/:allele',async (req, res, next) => {
  try {
    var total;
    con.query(`SELECT COUNT(*) AS total FROM ngs_data WHERE Locus = '${req.params.locus}'`,
      function (err, rows){
        if(err)
          throw (err)
        total = rows[0].total
        total = parseInt(total)
          console.log(total)
          console.log(req.params.allele)
      })
    con.query(`SELECT COUNT(*) AS interest FROM ngs_data WHERE Locus = '${req.params.locus}' && Allele = '${req.params.allele}'`,
      function (err, rows){
        if(err)
          throw (err)
        var interest = rows[0].interest
        interest = parseInt(interest)
          res.json(parseInt(interest)*100/parseInt(total))
      }
  )
  } catch (error) {
    next (error)
  }
})

module.exports = router