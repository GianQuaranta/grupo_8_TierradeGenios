module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        medio_de_pago: {
            allowNull: false, 
            type: dataTypes.VARCHAR(100)
        }, 
        
}

    const config = {
        timestamps: false, 

    }

    
    const medioDePago = sequelize.define("MedioDePago", cols, config)

    return medioDePago; 
}