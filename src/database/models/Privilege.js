module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        }, 
        privilege: {
            allowNull: false, 
            type: dataTypes.STRING(150)
        }
}

    const config = {
        timestamps: false, 

    }

    
    const Privilege = sequelize.define("Privilege", cols, config)

    Privilege.associate = function (models) {
        Privilege.belongsToMany(models.Category, {
            as: 'categories',
            through: 'CategoriesPrivileges',
            foreignKey: 'category_id',
            otherKey: 'privilege_id',
            timestamps: false
        });

        
    };

    return Privilege; 
}