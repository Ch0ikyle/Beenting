export const Room = (sequelize, DataTypes) => {
    return sequelize.define('Room', {
        roomCode : {
            type : DataTypes.STRING(5),
            primaryKey : true,
            allowNull : false
        },
        roomName : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        roomMember : {
            type : DataTypes.STRING(5),
            primaryKey : true
        },
        isLeader : {
            type : DataTypes.BOOLEAN
        }
    });
};