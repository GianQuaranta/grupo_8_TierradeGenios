module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.TINYINT
        }, 
        privilege: {
            allowNull: false, 
            type: dataTypes.VARCHAR(150)
        }
}

    const config = {
        timestamps: false, 

    }

    
    const privilege = sequelize.define("Privilege", cols, config)

    return privilege; 
}