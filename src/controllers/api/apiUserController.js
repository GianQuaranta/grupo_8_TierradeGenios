const db = require('../../database/models')
const path = require('path');

const apiUserController = {
list: async (req, res) => {
    try {

    db.User.findAll()

    .then (user => {

        let allUsers =

        user.map(us => {

        console.log('us', us)
            us.id = us.id,
            us.firstName = us.firstName,
            us.email = us.email,
            us.detail = 'URL'
            
        })

        console.log('allUsers', allUsers);

    
        return res.send (user)

    })
        /*return res.status(200).json({
            count: user.length,
            users: [
                {
                    id: user[0].id,
                    name: user.firstName,
                    email: user.email,
                    detail: 'URL'
                }
            ]})
    
    })*/

    } catch (e){
        res.send(e)
    }
}

}

module.exports = apiUserController;