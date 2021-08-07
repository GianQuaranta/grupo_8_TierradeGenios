module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        firstName: {
            allowNull: false,
            type: dataTypes.VARCHAR
        },
        lastName: {
            allowNull: false,
            type: dataTypes.VARCHAR
        },
        email: {
            type: dataTypes.VARCHAR
        },
        birthDate: {
            type: dataTypes.DATE
        },
        phoneNumber: {
            type: dataTypes.BIGINT
        },
        country: {
            type: dataTypes.VARCHAR

        },
        password: {
            type: dataTypes.VARCHAR
        },
        passwordConfirm: {
            type: dataTypes.VARCHAR
        },
        medioDePago: {
            type: dataTypes.VARCHAR
        },
        avatar: {
            type: dataTypes.VARCHAR

        },
    }

    const config = {
        timestamps: false,

    }


    const user = sequelize.define("User", cols, config)

    return User;
}