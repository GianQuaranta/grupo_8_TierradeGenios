module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.TINYINT
        }, 
        name: {
            allowNull: false, 
            type: dataTypes.VARCHAR(100)
        },
        privileges: {
            allowNull: false,
            primaryKey: true
        },
        image: {
            type: dataTypes.VARCHAR(250),
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
        category: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        range: {
            type: dataTypes.INTEGER,
            allowNull: false
    },
}

    const config = {
        timestamps: false, 

    }

    
    const product = sequelize.define("Product", cols, config)

    return product; 
}