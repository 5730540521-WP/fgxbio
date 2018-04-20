const { Router } = require('express')
const child_proc = require('child_process')
const constant = require('../config/constant')
const con = constant.con
const multer = require('multer')

let router = Router()

var execsql = require('execsql')
var dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Uq42=Tc8'
}
var sql = 'use db_cam;'
var sqlFile = './SQLcommand.sql'

const storage = multer.diskStorage({
  destination: './uploads',
  filename: function(req, file, cb) {
    console.log(file.mimetype)
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

router.post('/exceladd', upload.single('file'), async (req, res, next) => {
  if (req.file) {
    console.log(`Received file ${req.file.originalname}`)
    child_proc.exec(
      `python ./python/GenAddQuerytry.py ./uploads/${req.file.originalname}`,
      function(err) {
        if (err) {
          console.log('child process failed with error : ' + err)
          res.status(400).send('error')
        } else {
          console.log('SQL SCRIPT GENERATE')
          execsql
            .config(dbConfig)
            .exec(sql)
            .execFile(sqlFile, function(err, results) {
              if (err) throw err
              console.log(results)
              res.send('success')
            })
        }
      } /*run generate script from excel */
    )
  }
})

router.post('/seqalign', async (req, res, next) => {
  con.query(
    `SELECT * FROM ngs_data WHERE Locus = '${req.body.locus}' && Allele = '${
      req.body.allele
    }';`,
    function(err, rows) {
      if (err) throw err
      child_proc.exec(
        `python ./python/Sequence_Alignment.py ${req.body.locus} ${
          req.body.allele
        }`,
        function(err, output) {
          if (err) {
            console.log('child process failed with error : ' + err)
            res.status(400).send('error')
          }

          console.log(output)
          //console.log("PROCESS DONE");
          res.send({ info: rows, pattern: output.split('|') })
        }
      )
    }
  )
})

module.exports = router
