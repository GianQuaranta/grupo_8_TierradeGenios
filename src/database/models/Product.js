module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, 
        name: {
            allowNull: false, 
            type: dataTypes.VARCHAR
        }, 
        image: {
            type: dataTypes.VARCHAR
        }, 
        min: {
            type: dataTypes.VARCHAR
        }, 
        max: {
            type: dataTypes.VARCHAR
        }, 
        category: {
            type: dataTypes.INTEGER
        }, 
        range: {
            type: dataTypes.VARCHAR

    },
}

    const config = {
        timestamps: false, 

    }

    
    const product = sequelize.define("Product", cols, config)

    return product; 
}