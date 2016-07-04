/**For ECMAScript 6**/
"use strict";

let Sequelize = require("sequelize");

let DBInfo = {
    host: 'localhost',
    database: 'blog',
    username: 'root',
    password: 'asdfasdf',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
};

let sequelize = new Sequelize(DBInfo.database, DBInfo.username, DBInfo.password, {
    host: DBInfo.host,
    dialect: DBInfo.dialect,
    pool: DBInfo.pool
});

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