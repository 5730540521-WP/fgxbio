const { Router } = require("express");
const _ = require("lodash");

const authServ = require("../services/auth");
const con = require("../config/constant");

let router = Router();

router.get("/", async (req, res, next) => {
  await con.query(
    'SELECT * FROM ngs_data WHERE Sample_ID = "032F" && DataType ="A"',
    function(err, rows) {
      if (err) throw err;
      res.json(rows);
    }
  );
});

router.post("/manual", async (req, res, next) => {
  //req with a lot of param of [ {'locus': "locus", 'allele': "15" }, {} , {} ]
  console.log(req.body);
  var data = req.body;
  var command =
    "SELECT b.Sample_Year, b.Sample_ID FROM (SELECT a.Sample_Year, a.Sample_ID, COUNT(*) AS amount FROM (SELECT * FROM ngs_data WHERE ";
  console.log(data.length);
  data.forEach(function(item) {
    console.log(item.locus);
    console.log(item.allele);
    command += `( Locus = '${item.locus}' && Allele = '${item.allele}') ||`;
  });
  command = command.substring(0, command.length - 3);
  command += `) a GROUP BY a.Sample_Year, a.Sample_ID) b WHERE b.amount = ${
    data.length
  };`;
  console.log(command);
  con.query(command, function(err, rows) {
    if (err) throw err;
    res.json(rows);
  });
});

router.post("/excel", async (req, res, next) => {
  //req with excel file
});

router.get("/done", async (req, res, next) => {
  try {
    console.log(req.params.id);
    const admin = await authServ.authenticateAdmin(req.params.id);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
