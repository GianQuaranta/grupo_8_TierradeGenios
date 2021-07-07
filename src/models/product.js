const fs = require('fs');
const path = require('path');
const privileges = require('./privileges')
const category = require('./category')

const product = {

    all: ()=>{
        const directory = path.resolve(__dirname, '../data','products.json')
        const readJsonn = fs.readFileSync(directory,{encoding:'utf-8'});
        const products = JSON.parse(readJsonn);
        return products;
    },

    addOnlyPrivilege: ()=> {
        const productos = product.all();
        const productPrivilege = productos.map(producto =>{
            producto.privilege =  producto.privilege.map(onePrivilege => {
                onePrivilege = privilege.one(onePrivilege).privilege
                return onePrivilege;
                
        })

        return producto;
        
    } )
    return productPrivilege;
    
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

    }).map(product =>{
        product.privileges = product.privileges.map(privilege => {
            return privileges.one(privilege)
        })
        return product
    })  

    },

    one:(id) => {
        let all = product.addAll();
        return all.find(p => p.id == id)
    },

    create: (data,file) => {
        const directory = path.resolve(__dirname, '../data','products.json')
        let all = product.all();
        let categorySelect = category.one(data.category)
        let newPrivilege = privileges.create(data.privilege)
        categorySelect.privileges.push(newPrivilege);

        let newProduct = {
            id: all.length > 0 ? all[all.length -1].id + 1 : 1,
            name: data.name,
            privileges: categorySelect.privileges,
            image: file.filename,
            min: data.min,
            max: data.max,
            category: categorySelect.id,
            range: data.range
        };
        all.push(newProduct);
        fs.writeFileSync(directory,JSON.stringify(all,null,2));
        return true
    },

    one: (id)=> {
        let all= product.all();
        let findElement = all.find(element => element.id == id)
        return findElement;
    },

    edit: function (data,file,id){
        const directory = path.resolve(__dirname,"../data", "products.json"); //ruta donde va a guardar la información
        let categorySelect = category.one(data.category) //busca una categoría de acuerdo al id que recibe de la data
        let newPrivilege = data.privilege.length > 0 ? privileges.create(data.privilege): null; //si hay algún nuevo privilegio lo agrega, sino nada 
        let addPrivilegeCategory = newPrivilege ? categorySelect.privileges.push(newPrivilege): categorySelect.privileges; //
        let productos = product.all();
        productos.map(product => {
            if(product.id == id) {
                product.name = data.name,
                product.privileges = addPrivilegeCategory,
                product.category = categorySelect.id,
                product.image = file.filename,
                product.min = data.min, 
                product.max = data.max,
                product.range = data.range

                return product;

            }
            return product;
        })
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true
    },

    delete: function (id) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        let deleted = this.one(id);
        // eliminamos la imagen de la carpeta upload
        fs.unlinkSync(path.resolve(__dirname,"../../public/img/products",deleted.image))
        // filtarmos el producto que deaseamos eliminar
        productos = productos.filter(producto => producto.id != deleted.id )
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    }

}






module.exports = product;