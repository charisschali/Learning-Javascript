require('colors');
const _ = require('lodash');
const config = require('../config/config');
const noop = ()=> {};

const consoleLog = config.logging ? console.log.bind(console) : noop ;
const logger = {
    log: () => {
        const args = _.toArray(arguments)
        .map((arg) => {
            if(typeof arg === 'object') {
                 //  return string.magenta;
                return arg
            } else {
                arg += '';
                return arg.magenta;

            }
        });
    }
};

module.exports = logger;