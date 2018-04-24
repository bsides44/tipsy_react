exports.up = function(knex, Promise) {
    return knex.schema.createTable('profiles', (table) => {
        table.increments('id').primary()
        table.string('firstname')
        table.string('lastname')
        table.text('tagline')
        table.string('email')
        table.string('profilepic')
        table.integer('language_id')
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('profiles') 
};
