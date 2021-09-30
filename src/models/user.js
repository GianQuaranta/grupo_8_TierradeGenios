const fs = require('fs');
const path = require('path');   

//const descriptions = require('./user')

const user = {
    filename: path.resolve(__dirname, '../data','users.json'),

    getData: function () {
        return fs.readFileSync(this.filename, "utf-8")
    },
      
    findAll: ()=>{
        const allUsers = user.getData()
        const users = JSON.parse(allUsers);
        return users;
    },

    findByPk: (id) => {
        const readUsers = user.findAll();
        const findElement = readUsers.find(element => element.id == id)
        return findElement;
    },

    findByField: function (field, text){
        const allUsers = user.findAll();
        const userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    generateId: function () {
        const allUsers = user.findAll();
        const lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;

    },

    create: function (userData){
        const allUsers = user.findAll();
        const newUser = {
            id: user.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(user.filename, JSON.stringify(allUsers, null, " "));
        return allUsers

    },

    delete: function (id) {
        const allUsers = user.findAll();    
        const finalUser = allUsers.filter(oneUser => oneUser.id !== id)
        fs.writeFileSync(user.filename, JSON.stringify(finalUser, null, " "));
        return true;
    }

}


module.exports = user;