const fs = require('fs');
const path = require('path');
const productController = require('../controllers/productControllers');
const descriptions = require('./description')

const product = {

    all: ()=>{
        const directory = path.resolve(__dirname, '../data','products.json')
        const readJsonn = fs.readFileSync(directory,'utf-8');
        const products = JSON.parse(readJsonn);
        return products;
    },

    description: ()=> {
        const productos = product.all();
        const productDescription = productos.map(element =>{
            element.description =  element.description.map(oneDescription => {
                oneDescription = descriptions.one(oneDescription).description
                return oneDescription
        })

        return element
    } )
    return productDescription;
}
}






module.exports = product;