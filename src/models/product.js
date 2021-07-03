const fs = require('fs');
const path = require('path');
const descriptions = require('./description')
const category = require('./category')

const product = {

    all: ()=>{
        const directory = path.resolve(__dirname, '../data','products.json')
        const readJsonn = fs.readFileSync(directory,'utf-8');
        const products = JSON.parse(readJsonn);
        return products;
    },

    addOnlyDescription: ()=> {
        const productos = product.all();
        const productDescription = productos.map(producto =>{
            producto.description =  producto.description.map(oneDescription => {
                oneDescription = descriptions.one(oneDescription).description
                return oneDescription;
                
        })

        return producto;
        
    } )
    return productDescription;
    
},

    addOnlyCategory: ()=> {
        const productos = product.all();
        const productCategory = productos.map(producto =>{
            producto.category = category.one(producto.category) 
            return producto
    } )

    return productCategory;
    
    },

    addAll: ()=> {
        const productos = product.all();
        //const productDescription = productos.map(producto =>{
        /*    producto.description =  producto.description.map(oneDescription => {
                oneDescription = descriptions.one(oneDescription).description
                return oneDescription;
                
        })

        return producto;
        
    })
*/

        return product.all().map(producto =>{
            producto.category = category.one(producto.category) 
            return producto

    }).map(producto =>{
        producto.description =  producto.description.map(oneDescription => {
        oneDescription = descriptions.one(oneDescription).description
        return oneDescription;
                
        })

        return producto;
        
    }); 

    }
}






module.exports = product;