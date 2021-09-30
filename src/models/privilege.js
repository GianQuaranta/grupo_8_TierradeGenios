const fs = require('fs');
const path = require('path');

const privileges = {
    
    all: ()=>{
        const directory = path.resolve(__dirname, '../data','privileges.json')
        const readJson = fs.readFileSync(directory,'utf-8');
        const products = JSON.parse(readJson);
        return products;
    } ,

    one: (id)=> {
        let readPrivileges= privileges.all();
        let findElement = readPrivileges.find(element => element.id == id)
        return findElement;
    },
    
    create: (data)=>{
        let all= privileges.all();
        const directory = path.resolve(__dirname, '../data','privileges.json')
        let newPrivilege = {
            id: all.length > 0 ? all[all.length -1].id + 1 : 1,
            privilege: data
        
        }
        all.push(newPrivilege);
        fs.writeFileSync(directory,JSON.stringify(all,null,2));
        return newPrivilege.id

    }

}


module.exports = privileges