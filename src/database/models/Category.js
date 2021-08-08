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
        color: {
            type: dataTypes.VARCHAR
        }, 
        privileges: {
            foreignKey: true,
            type: dataTypes.VARCHAR
        }
}

    const config = {
        timestamps: false, 

    }

    
    const category = sequelize.define("Category", cols, config)

    return category; 
}