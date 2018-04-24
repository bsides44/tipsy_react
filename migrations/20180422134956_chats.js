exports.up = function(knex, Promise) {
    return knex.schema.createTable('chats', (table) => {
        table.increments('id').primary()
        table.integer('user_id')
        table.integer('match_id')
        table.text('message')
        table.timestamp('created_at').defaultTo(knex.fn.now())
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('chats') 
};
