export const User = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        userCode : {
            type : DataTypes.STRING(5),
            primaryKey : true,
            allowNull : false
        },
        id : {
            type : DataTypes.STRING(50),
            allowNull : false,
            unique : true
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        auth : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        number : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        name : {
            type : DataTypes.STRING(50),
            allowNull : false
        }
    });
};