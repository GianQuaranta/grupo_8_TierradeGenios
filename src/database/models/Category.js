module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.TINYINT,
            allowNull: false
        }, 
        name: {
            allowNull: false, 
            type: dataTypes.VARCHAR(100)
        }, 
        color: {
            allowNull: false,
            type: dataTypes.VARCHAR(100)
        }, 
        privileges: {
            foreignKey: true,
            allowNull: false,
            type: dataTypes.TINYINT
        }
}

    const config = {
        timestamps: false, 

    }

    
    const category = sequelize.define("Category", cols, config)

    return category; 
}