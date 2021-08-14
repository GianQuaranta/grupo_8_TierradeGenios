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
        timestamps: false
    }

    
    const category = sequelize.define("Category", cols, config)

    Category.associate = function (models) {
        Category.belongToMany(models.Privilege, {
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

    return category; 
}