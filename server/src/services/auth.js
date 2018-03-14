const con = require('../config/constant')

async function authenticateAdmin (values) {
    con.query(`SELECT * FROM admins WHERE Username = '${values.username}' && Pass = '${values.password}'`,
     function (error, result){
        if(error)
          throw (error)
        if(result){
          console.log(JSON.stringify(result))
          console.log('userfound logging in')
          return JSON.parse(JSON.stringify(result))
        }
        else{
          const error = new Error('User not found')
          error.status = 401
          throw error
        }
    }) 
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