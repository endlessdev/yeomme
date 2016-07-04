/**
 * Created by Jade on 7/4/16.
 */
module.exports = function (sequelize, DataTypes) {
    
  return sequelize.define('post', {
        idx: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        title: {
            type: DataTypes,STRING_TYPE,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        content: {
            type: DataTypes.STRING_TYPE,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        category_idx: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        view_count: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true,
                notEmpty: true
            }
        }
    });  
};