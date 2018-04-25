
exports.seed = function (knex, Promise) {
  return knex('matches').del()
    .then(function () {
  return knex('matches').insert([
    {user_id:1, match_id:2},
    {user_id:1, match_id:3},
    {user_id:2, match_id:1},
    {user_id:2, match_id:3},
    {user_id:3, match_id:1},
    {user_id:3, match_id:2},
    {user_id:4, match_id:5},
    {user_id:5, match_id:6},
    {user_id:6, match_id:7},
          ]
    )})
}
