const fs = require('fs');
const path = require('path');

const descriptions = {
    
    all: ()=>{
        const directory = path.resolve(__dirname, '../data','description.json')
        const readJson = fs.readFileSync(directory,'utf-8');
        const products = JSON.parse(readJson);
        return products;
    } ,

    one: (id)=> {
        let readDescriptions= descriptions.all();
        let findElement = readDescriptions.find(element => element.id == id)
        return findElement;
    }

}

module.exports = descriptions