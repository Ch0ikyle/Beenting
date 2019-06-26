export const Room = (sequelize, DataTypes) => {
    return sequelize.define('Room', {
        RoomCode : {
            type : DataTypes.STRING(5),
            primaryKey : true,
            allowNull : false
        },
        RoomName : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        RoomMember : {
            type : DataTypes.STRING(5),
            primaryKey : true
        }
    });
};