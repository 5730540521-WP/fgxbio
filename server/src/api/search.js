const { Router } = require('express')
const _ = require('lodash')
const fs = require('fs')
const multer = require('multer')

const authServ = require('../services/auth')
const constant = require('../config/constant')
var path = require('path')

const con = constant.con

const storage = multer.diskStorage({
  destination: './uploads',
  filename: function(req, file, cb) {
    console.log(file.mimetype)
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

let router = Router()

router.get('/', async (req, res, next) => {
  await con.query(
    'SELECT * FROM ngs_data WHERE Sample_ID = "032F" && DataType ="A"',
    function(err, rows) {
      if (err) throw err
      res.json(rows)
    }
  )
})

router.post('/manual', async (req, res, next) => {
  //req with a lot of param of [ {'locus': "locus", 'allele': "15" }, {} , {} ]
  var data = req.body
  var minimal = []
  data.map(entry => {
    for (i = 0; i < constant.Minimal_A.length; i++)
      if (entry.locus == constant.Minimal_A[i]) minimal.push(entry)
    for (i = 0; i < constant.Minimal_Y.length; i++)
      if (entry.locus == constant.Minimal_Y[i]) minimal.push(entry)
  })
  //console.log("data", data);
  //console.log("minimal", minimal);
  var command =
    'SELECT b.Sample_Year, b.Sample_ID FROM (SELECT a.Sample_Year, a.Sample_ID, COUNT(*) AS amount FROM (SELECT * FROM ngs_data WHERE '
  //console.log(data.length);
  data.forEach(function(item) {
    console.log(item.locus, ' ', item.allele)
    command += `( Locus = '${item.locus}' && Allele = '${item.allele}') ||`
  })
  command = command.substring(0, command.length - 3)
  command += `) a GROUP BY a.Sample_Year, a.Sample_ID) b WHERE b.amount = ${
    data.length
  };`
  console.log(command)
  con.query(command, function(err, resultSearch) {
    if (err) throw err
    var command2 =
      'SELECT b.Sample_Year, b.Sample_ID FROM (SELECT a.Sample_Year, a.Sample_ID, COUNT(*) AS amount FROM (SELECT * FROM ngs_data WHERE '
    minimal.forEach(function(item) {
      console.log(item.locus, ' ', item.allele)
      command2 += `( Locus = '${item.locus}' && Allele = '${item.allele}') ||`
    })
    command2 = command2.substring(0, command2.length - 3)
    command2 += `) a GROUP BY a.Sample_Year, a.Sample_ID) b WHERE b.amount = ${
      minimal.length
    };`
    console.log(command2)
    con.query(command2, function(err, resultExpect) {
      if (err) throw err
      res.json({ result: resultSearch, expect: resultExpect })
    })
  })
})

router.post('/excelsearch', upload.single('file'), async (req, res, next) => {
  //req with excel file
  //console.log(req);
  console.log(req.file)

  if (req.file) {
    console.log(`Received file ${req.file.originalname}`)
    res.send('upload success')
  }
})

router.get('/sampleexcel', (req, res, next) => {
  res.download('./src/public/SampleExcel.xlsx', function(err) {
    if (err) {
      res.send(err)
    }
  })
})

router.get('/done', async (req, res, next) => {
  try {
    console.log(req.params.id)
    const admin = await authServ.authenticateAdmin(req.params.id)
  } catch (error) {
    next(error)
  }
})

module.exports = router
