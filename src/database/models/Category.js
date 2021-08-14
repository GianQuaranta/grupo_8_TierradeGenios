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
            type: dataTypes.STRING(100)
        }, 
        color: {
            allowNull: false,
            type: dataTypes.STRING(100)
        }
}

    const config = {
        timestamps: false
    }

    
    const Category = sequelize.define("Category", cols, config)

    Category.associate = function (models) {
        Category.belongsToMany(models.Privilege, {
            as: 'privileges',
            through: 'CategoriesPrivileges',
            foreignKey: 'privilege_id',
            otherKey: 'category_id',
            timestamps: false
        });

        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id',
        });
    
    };

    return Category; 
}