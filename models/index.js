/**For ECMAScript 6**/
"use strict";

let Sequelize = require("sequelize"),
    env = process.env.NODE_ENV || "development",
    config = require(__dirname + '/../config/config.json')[env],
    sequelize = new Sequelize(config.database, config.username, config.password,config);

sequelize
    .authenticate()
    .then(function () {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });

global.db = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    User: sequelize.import(__dirname + '/user'),
    Post: sequelize.import(__dirname + '/post'),
    ContentMedia: sequelize.import(__dirname + '/content_media')
};

module.exports = global.db;