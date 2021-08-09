module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        }, 
        email: { 
            type: dataTypes.VARCHAR(100),
            allowNull: false
        }
}

    const config = {
        timestamps: false, 

    }

    
    const admin = sequelize.define("Admin", cols, config)

    return admin; 
}