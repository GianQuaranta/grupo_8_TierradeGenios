module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        medio_de_pago_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        
}

    const config = {
        timestamps: false, 
        tableName: "UserMediosDePago"
    }

    
    const UserMedioDePago = sequelize.define("UserMediosDePago", cols, config);

    UserMedioDePago.associate = function (models) {
            

    };

    return UserMedioDePago; 
}