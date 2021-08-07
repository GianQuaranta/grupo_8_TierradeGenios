module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, 
        privilege: {
            allowNull: false, 
            type: dataTypes.VARCHAR
        }
}

    const config = {
        timestamps: false, 

    }

    
    const privilege = sequelize.define("Privilege", cols, config)

    return privilege; 
}