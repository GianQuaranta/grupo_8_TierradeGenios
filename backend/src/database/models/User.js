module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        firstName: {
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        lastName: {
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        birthDate: {
            type: dataTypes.DATE,
            allowNull: false
        },
        adress: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        phoneNumber: {
            type: dataTypes.BIGINT,
            allowNull: false
        },
        country: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(250),
            allowNull: false
        },

        isAdmin: {
            type: dataTypes.TINYINT,
            allowNull: false
        }
    }

    const config = {
        timestamps: false,

    }


    const User = sequelize.define("User", cols, config);

    User.associate = function (models) {
    
        User.belongsToMany(models.Product, {
            as: 'donationUser',
            through: 'donations',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        });

      User.belongsToMany(models.MedioDePago, {
            as: 'MedioDePago',
            through: 'UserMediosDePago',
            foreignKey: 'user_id',
            otherKey: 'medio_de_pago_id',
            timestamps: false,
            onDelete: 'cascade'
        })


    };



    return User;
}