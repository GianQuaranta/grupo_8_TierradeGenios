module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        }, 
        user_id: {
            allowNull: false, 
            type: dataTypes.INTEGER
        },
        product_id: {
            allowNull: false, 
            type: dataTypes.INTEGER
        },
        quantity_donate: {
            allowNull: false, 
            type: dataTypes.INTEGER
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
        }
}

    const config = {
        timestamps: false, 

    }

    
    const Donation = sequelize.define("Donation", cols, config);

    Donation.associate = function (models) {

        /**   Donation.belongsToMany(models.Product, {
            as: 'product',
            through: 'donation',
            foreignKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false
        });

      Donation.belongsToMany(models.User, {
            as: 'user',
            through: 'donation',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        })**/
    
    };

    return Donation; 
}