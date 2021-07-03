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

    },
    one:(id) => {
        let all = this.addAll();
        return all.find(p => p.id == id)
    },
    create: (data,file) => {
        let all = this.all();
        let newProduct = {
            id: all.lenght > 0 ? all[all.lenght -1].id + 1 : 1,
            name: data.name,
            description: data.description,
            image: file.filename,
            min: data.min,
            max: data.max,
            category: data.category,
            range: data.range
        };
        all.push(newProduct);
        // escribir en el JSON
    }
    
}






module.exports = product;
