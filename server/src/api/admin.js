const { Router } = require('express')
const child_proc = require('child_process')

let router = Router()

router.post('/adddata', (req, res, next) => {
  child_proc.exec(`python ${__dirname}/`/*run generate script from excel */ , function(err) {
    if(err) {
      console.log("generate script fail with error : " + err)
      res.status(400).send('error generating mySQL script');
    }
    console.log('SQL SCRIPT GENERATED');
    // run mySQL script
  })
})


router.post('/upload', (req, res, next) => {
  //req.files.pic.mv(`${__dirname}`)
  console.log(req.files.pic.name)
  res.send('File Upload!')
  console.log(`${__dirname}` + '/../')

})
router.get('/seqalign', (req, res, next) => {
  
})

module.exports = router