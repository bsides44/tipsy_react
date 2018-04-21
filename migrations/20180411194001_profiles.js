exports.up = function(knex, Promise) {
    return knex.schema.createTable('profiles', (table) => {
        table.increments('id').primary()
        table.string('firstname')
        table.string('lastname')
        table.string('tagline')
        table.string('email')
        table.string('profilepic')
        table.string('language_id')
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('profiles') 
};
