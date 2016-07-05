/**
 * Created by Jade on 7/4/16.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_media', {
        idx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        content_idx: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        file_name: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        org_file_name: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        dir: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        reg_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            validate: {
                notNull: true,
                notEmpty: true
            }
        }
    });
};