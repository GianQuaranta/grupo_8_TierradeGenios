const fs = require('fs');
const path = require('path');   

//const descriptions = require('./user')

const admin = {
    filename: path.resolve(__dirname, '../data','admins.json'),

    getData: function () {
        return fs.readFileSync(this.filename, "utf-8")
    },
      
    findAll: ()=>{
        const allUsers = admin.getData()
        const users = JSON.parse(allUsers);
        return users;
    },

    findByPk: (id) => {
        const readUsers = admin.findAll();
        const findElement = readUsers.find(element => element.id == id)
        return findElement;
    },

    findByField: function (field, text){
        const allUsers = admin.findAll();
        const userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    generateId: function () {
        const allUsers = admin.findAll();
        const lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;

    },

    create: function (userData){
        const allUsers = admin.findAll();
        const newUser = {
            id: admin.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(admin.filename, JSON.stringify(allUsers, null, " "));
        return allUsers

    },

    delete: function (id) {
        const allUsers = admin.findAll();    
        const finalUser = allUsers.filter(oneUser => oneUser.id !== id)
        fs.writeFileSync(admin.filename, JSON.stringify(finalUser, null, " "));
        return true;
    }

}


module.exports = admin;
