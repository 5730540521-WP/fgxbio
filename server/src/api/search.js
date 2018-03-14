const { Router }  = require('express')
const _ = require('lodash')

const authServ = require('../services/auth')
const con = require('../config/constant')

let router = Router()

router.get('/',async (req, res, next) => {
  
  await con.query('SELECT * FROM ngs_data WHERE Sample_ID = "032F" && DataType ="A"',
            function(err,rows){
                if(err) 
                  throw err
                res.json(rows)        
  })
})

router.post('/match', async (req, res, next) => {
  //req with a lot of param of 'locus: "allele"'
  
  
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