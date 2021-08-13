module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        name: {
            allowNull: false, 
            type: dataTypes.VARCHAR(100)
        }, 
        color: {
            allowNull: false,
            type: dataTypes.VARCHAR(100)
        }
}

    const config = {
        timestamps: false, 

    }

    
    const category = sequelize.define("Category", cols, config)

    return category; 
}