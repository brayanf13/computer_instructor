
exports.up = function(knex) {
    return knex.schema.createTable('unity', function (table) {
        table.increments();
        table.string('image_name').notNullable();
        table.string('image_url').notNullable();
        table.string('name').notNullable();
        table.string('content').notNullable();
        table.integer('module_id').notNullable();
        table.foreign('module_id').references('id').inTable('module');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('unity')
};
