module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        }, 
        name: {
            allowNull: false, 
            type: dataTypes.STRING(100)
        },
        image: {
            type: dataTypes.STRING(250),
            allowNull: false
        }, 
        min: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        max: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        rango: {
            type: dataTypes.INTEGER,
            allowNull: false
    },
}

    const config = {
        timestamps: false, 

    }

    
    const Product = sequelize.define("Product", cols, config)

    Product.associate = function (models) {

        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });
    
      /**   Product.belongsToMany(models.Donation, {
            as: 'donation',
            through: 'donation',
            foreignKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false
        })*/ 

    };

    return Product; 
}