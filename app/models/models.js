const config = require('../config/environment');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password, {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const User = sequelize.define('user', {
    name: Sequelize.STRING
});

module.exports = {
    sequelize: sequelize,
    User: User
}