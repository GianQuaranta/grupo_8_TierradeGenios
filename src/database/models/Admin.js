module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, 
        email: { 
            type: dataTypes.VARCHAR
        }
}

    const config = {
        timestamps: false, 

    }

    
    const admin = sequelize.define("Admin", cols, config)

    return admin; 
}