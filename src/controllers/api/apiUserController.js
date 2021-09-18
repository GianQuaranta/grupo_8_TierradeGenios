const db = require('../../database/models')
const path = require('path');

const apiUserController = {
list: async (req, res) => {
    try {

    let user = await db.User.findAll();

    let usersNew = user.map(function (us) {
        return {
            id: us.id,
            name: us.firstName,
            email: us.email,
            detail: 'http://localhost:3000/api/users/' + us.id
        }
    })

    console.log("userNew",usersNew);

    console.log("usersLength", usersNew.length);
        
    return res.status(200).json({
        count: usersNew.length,
        users: usersNew
    })
        
    } catch (e){
        res.send(e)
    }
}

}

module.exports = apiUserController;