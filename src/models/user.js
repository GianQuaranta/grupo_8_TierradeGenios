const fs = require('fs');
const path = require('path');
//const descriptions = require('./user')

const user = {
    
    all: ()=>{
        const directory = path.resolve(__dirname, '../data','users.json')
        const readJsonn = fs.readFileSync(directory,'utf-8');
        const users = JSON.parse(readJsonn);
        return users;
    },

    one: (email)=> {
        let readUsers = descriptions.all();
        let findElement = readUsers.find(element => element.email == email)
        return findElement;
    }

}

module.exports = user;