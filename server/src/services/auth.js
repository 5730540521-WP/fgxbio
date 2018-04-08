const con = require('../config/constant')

async function authenticateAdmin (values) {
    const result = await con.query(`SELECT * FROM admins WHERE Username = '${values.username}' && Pass = '${values.password}'`)
    if (result.error) {
      // throw error
    }
    console.log(JSON.stringify(result))
    console.log('userfound logging in')
    
    return JSON.parse(JSON.stringify(result))
} 


function isAuthenticatedAdmin(req, res, next){
  if(req.admin)
    return next()
  return res.status(401).json({ message: 'Admin Unauthorized. Please sign in before proceed.' })
}

module.exports = {
  authenticateAdmin,
  isAuthenticatedAdmin
}