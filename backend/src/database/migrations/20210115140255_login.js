
exports.up = function (knex) {
    return knex.schema.createTable('login', function (table) {
        table.increments('id').primary();
        table.string('user').notNullable();
        table.string('password').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('login')
};
