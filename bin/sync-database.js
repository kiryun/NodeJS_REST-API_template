const models = require('../app/models/models');
const config = require('../app/config/environment');

module.exports = () => {
    // console.log(models.sequelize.sync({force: config.force})); 
    return models.sequelize.sync({force: config.force});
}