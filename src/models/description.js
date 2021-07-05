const fs = require('fs');
const path = require('path');

const descriptions = {
    
    all: ()=>{
        const directory = path.resolve(__dirname, '../data','descriptions.json')
        const readJson = fs.readFileSync(directory,'utf-8');
        const products = JSON.parse(readJson);
        return products;
    } ,

    one: (id)=> {
        let readDescriptions= descriptions.all();
        let findElement = readDescriptions.find(element => element.id == id)
        return findElement;
    },

    create: (data)=>{
        let all= descriptions.all();
        const directory = path.resolve(__dirname, '../data','descriptions.json')
        let newPrivilege = {
            id: all.length > 0 ? all[all.length -1].id + 1 : 1,
            description: data
        
        }
        all.push(newPrivilege);
        fs.writeFileSync(directory,JSON.stringify(all,null,2));
        return newPrivilege.id

    }

}

module.exports = descriptions