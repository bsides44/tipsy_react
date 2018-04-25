
exports.up = function(knex, Promise) {
    return knex.schema.createTable('languages', (table) => {
        table.increments('id').primary()
        table.boolean('english')
        table.boolean('spanish')
        table.boolean('te_reo')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('languages')
};
