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

            /**return res.status(200).json({
                count: product.length,
                countByCategory: {
                    bronce: bronce,
                    plata: plata,
                    oro: oro
                },
                products: product
            })**/

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
                    main_relationship_1aN : [], // --->  falta ver qué poner acá
                    detail: 'http://localhost:3000/api/products/' + prod.id
                }
            })

            console.log(productNew);

            return res.send(productNew)



        } catch (e) {
            res.send(e)
        }
    },

    detail: async (req, res) => {

        try {

            let product = await db.Product.findByPk(req.params.id, {
                include: [{ association: "category" }]});

            //console.log("product", product);

            let productNew = Array(product).map(function (produ) {

                //console.log("produ", produ);

                return {
                    id: produ.id,
                    name: produ.name,
                    image: ('C:\\Users\\Gian Quaranta\\Documents\\Curso Desarrollo Web Full Stack - Digital House\\PracticoIntegrador\\RepositorioLocalPracticoIntegrador\\clon_grupo_8_tierradegenios\\grupo_8_TierradeGenios\\Public\\img\\products\\' + produ.image),
                    min: produ.min,
                    max: produ.max,
                    category_id: produ.category_id,
                    rango: produ.rango,
                    info_category: produ.category,
                }

            })

            console.log("productNew", productNew);

            return res.send(productNew);

        } catch (e) {
            res.send(e);
        }

    }

}

module.exports = apiUserController;