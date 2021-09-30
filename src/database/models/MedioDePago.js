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
            type: dataTypes.STRING(100)
        }, 
        
}

    const config = {
        timestamps: false, 
        tableName: "MediosDePago"
    }

    
    const MedioDePago = sequelize.define("MedioDePago", cols, config);

    MedioDePago.associate = function (models) {
    
        MedioDePago.belongsToMany(models.User, {
            as: 'user_MediodePagos',
            through: 'UserMediosDePago',
            foreignKey: 'medio_de_pago_id',
            otherKey: 'user_id',
            timestamps: false
        });

        

    };

    return MedioDePago; 
}