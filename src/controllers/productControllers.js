const productController = {
    vistaDeLosProductos: (req,res)=> {
        res.render('productDetail')
    },

    productList: (req,res) =>{
        res.render('productList')
    }
}

module.exports = productController;