const database = require('../models/index.js')

class LoginController {
    static async MostraLogin(req, res) {
        try{
            const todosOsLogins = await database.login.findAll()
            return res.status(200).json(todosOsLogins)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
 
 
    }
}
module.exports = LoginController