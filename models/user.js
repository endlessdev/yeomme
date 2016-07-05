/**
 * Created by Jade on 7/4/16.
 */
'use strict'

let bcrypt = require('bcrypt-nodejs'),
    eat = require('eat');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        idx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        user_id: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        user_name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        user_secret: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        user_email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        user_token: {
            unique: true,
            type: DataTypes.STRING,
            validate: {}
        },
        token_expire: {
            type: DataTypes.DATE,
            validate: {}
        }

    }, {
        freezeTableName: true,
        classMethods: {
            generateHash: function (password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            }
        }, instanceMethodsb: {
            isValidPassword: function (password) {
                return bcrypt.compareSync(password, this.user_secret);
            },
            generateToken: function (userSecret, tokenHandle) {
                eat.encode({user_id: this.user_id, timestamp: new Date()}, userSecret, tokenHandle);
            }
        }

    });
};