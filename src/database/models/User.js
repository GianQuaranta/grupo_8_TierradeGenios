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
            type: dataTypes.VARCHAR(100)
        },
        lastName: {
            allowNull: false,
            type: dataTypes.VARCHAR(100)
        },
        email: {
            type: dataTypes.VARCHAR(100),
            allowNull: false,
            unique: true
            // Como agregar el UNIQUE tipo de dato
        },
        birthDate: {
            type: dataTypes.DATE,
            allowNull: false
        },
        adress: {
            type: dataTypes.VARCHAR(150),
            allowNull: false
        },
        phoneNumber: {
            type: dataTypes.BIGINT,
            allowNull: false
        },
        country: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        password: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
            medioDePago: {
            type: dataTypes.VARCHAR(100),
            allowNull: true
        },
        avatar: {
            type: dataTypes.VARCHAR(250),
            allowNull: false
        },

        idAdmin: {
            type: dataTypes.TINYINT,
            allowNull: false
        }
    }

    const config = {
        timestamps: false,

    }


    const user = sequelize.define("User", cols, config)

    return User;
}