const knex = require('knex');
const configuration = require('../../knexfile');

// const connection = knex(configuration.development);
const connection = knex(configuration);

module.exports = connection;