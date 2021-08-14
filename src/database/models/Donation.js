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

    
    const donation = sequelize.define("Donation", cols, config)

    return donation; 
}