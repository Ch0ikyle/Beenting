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
            type : DataTypes.TEXT,
            allowNull : false
        },
        auth : {
            type : DataTypes.INTEGER
        },
        number : {
            type : DataTypes.STRING(4)
        },
        name : {
            type : DataTypes.STRING(50),
            allowNull : false
        }
    });
};