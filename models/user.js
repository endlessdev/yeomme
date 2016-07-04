/**
 * Created by Jade on 7/4/16.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        idx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        user_id: {
            type: DataTypes.STRING_TYPE,
            field: 'user_id',
            unique : true,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        user_name: {
            type: DataTypes.STRING_TYPE,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        user_secret: {
            type: DataTypes.STRING_TYPE,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        user_email: {
            type: DataTypes.STRING_TYPE,
            unique :true,
            validate: {
                isEmail: true,
                notNull: true,
                notEmpty: true
            }
        },
        user_token: {
            unique : true,
            type: DataTypes.STRING_TYPE,
            validate: {}
        },
        token_expire: {
            type: DataTypes.DATE,
            validate: {}
        }
    });
};