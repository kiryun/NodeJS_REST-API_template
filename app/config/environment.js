const environment = {
    development: {
        mysql: {
            username: 'root',
            password: '',
            database: 'node_api_tuto'
        },

        sequelize: {
            force: false
        }
    },

    test: {
        mysql: {
            username: 'root',
            password: '',
            database: 'node_api_tuto_test'
        },
        
        sequelize: {
            force: true
        }
    },

    production: {

    }
}

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = environment[nodeEnv];