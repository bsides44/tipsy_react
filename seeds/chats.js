
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([
        {id: 1, user_id: '1', match_id: '2', message: 'heyyy', created_at: '2018-04-22T13:49:19'},
        {id: 2, user_id: '2', match_id: '1', message: 'hi there!', created_at: '2017-04-22T13:50:19'},
        {id: 3, user_id: '1', match_id: '2', message: 'how be ye?', created_at: '2017-04-22T13:50:25'}
      ]);
    });
};
