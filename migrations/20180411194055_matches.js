
exports.up = function(knex, Promise) {
    return knex.schema.createTable('matches', (table) => {
        table.increments('id').primary()
        table.integer('user_id')
        table.integer('match_id')
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('matches') 
};
