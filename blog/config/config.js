const _ = require('lodash');
const config = {
    dev: 'development',
    tes: 'testing',
    prod: 'production',
    port: process.env.PORT || 8000,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USER: process.env.DB_USER
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

config.env = process.env.NODE_ENV;

let envConfig;

try {
    envConfig = require('./'+ config.env);
    envConfig = envConfig || {};
} catch(e){
    envConfig = {};
}

module.exports = _.merge(config, envConfig);