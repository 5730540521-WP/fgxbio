const mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Uq42=Tc8",
  database: "fxbio"
})

async function authenticateAdmin (values) {
  try {
    const user = await con.query(`SELECT COUNT (*) AS userFound FROM admins WHERE Username = '${values}' && Pass = '12345'`,
     function (error, result){
        if(error)
          throw (error)
        if(result[0].userFound == 1){
          console.log(result[0].userFound)
          console.log('userfound logging in')
        }
        else{
          const error = new Error('User not found')
          error.status = 401
          throw error
        }
        return result
    }) 
  } catch(error) { 
    next(error)
  }
}

function isAuthenticatedAdmin(req, res, next){
  if(req.admin)
    return next()
  return res.status(401).json({ message: 'Admin Unauthorized. Please sign in before proceed.' })
}

async function newAdmin(req, res, next){
  const admin = await con.query("INSERT INTO `fxbio`.`admins` (`User_ID`, `Username`, `Pass`) VALUES ('FGX03', 'Admin03', '12345')")
    return admin
}

module.exports = {
  authenticateAdmin,
  isAuthenticatedAdmin,
  newAdmin
}