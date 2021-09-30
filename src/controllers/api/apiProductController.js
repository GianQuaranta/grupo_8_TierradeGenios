const db = require('../../database/models')
const path = require('path');

const apiUserController = {
    list: async (req, res) => {
        try {

            let product = await db.Product.findAll({
                include: [{ association: "category" }]
            });

            const pedidoCategories = await db.Category.findAll({
                include: [{ association: "privileges" }]
            });

            // categorías existentes acumuladores

            let bronce = 0;
            let plata = 0;
            let oro = 0;
            let desconocida = 0;

            product.forEach((prod, i) => {

                if (prod.category_id === 1) {
                    bronce = bronce + 1;
                } else if (prod.category_id === 2) {
                    plata = plata + 1;
                } else if (prod.category_id === 3) {
                    oro = oro + 1;
                } else {
                    desconocida + 1
                }

            })

            //console.log("bronce", bronce);
            //console.log("plata", plata);
            //console.log("oro", oro);

            let productNew = product.map(function (prod) {


                let categoriaPorProducto = pedidoCategories.find(element => element.id === prod.category_id)

                // console.log("categoriaPorProducto", categoriaPorProducto);

                let arrayPrivilegios = categoriaPorProducto.privileges.map(function (element) {

                    return element.privilege

                });

                //console.log("arrayPrivilegios", arrayPrivilegios);

                return {
                    id: prod.id,
                    name: prod.name,
                    description: arrayPrivilegios,
                    detail: 'http://localhost:3001/api/products/' + prod.id
                }
            })

            //console.log(productNew);

            return res.status(200).json({
                count: product.length,
                countByCategory: {
                    bronce: bronce,
                    plata: plata,
                    oro: oro
                },
                data: productNew
            })



        } catch (e) {
            res.send(e)
        }
    },

    detail: async (req, res) => {

        try {

            let id = parseInt(req.params.id);

            let product = await db.Product.findByPk(id, {
                include: [{ association: "category" }]
            });

            //console.log("product", product);

            const pedidoCategories = await db.Category.findAll({
                include: [{ association: "privileges" }]
            });

            console.log("pedidoCategories", pedidoCategories);

            let categoryByProduct = pedidoCategories.find(categ => { return categ.id === product.category_id });
            console.log("categoryByProduct", categoryByProduct);

            let productNew = Array(product).map(function (produ) {

                //console.log("produ", produ);

                return {
                    id: produ.id,
                    name: produ.name,   
                    image: 'http://localhost:3001/image/product/' + id ,
                    min: produ.min,
                    max: produ.max,
                    category_id: produ.category_id,
                    rango: produ.rango,
                    info_category: categoryByProduct
                }

            })

            //console.log("productNew", productNew);

            //return res.send(productNew);
            return res.status(200).json({detail:productNew});

        } catch (e) {
            res.send(e);
        }

    }

}

module.exports = apiUserController;