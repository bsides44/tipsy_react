
exports.seed = function (knex, Promise) {
  return knex('languages').del()
    .then(function () {
  return knex('languages').insert([
    {id:1, english: true, spanish: true, te_reo: false},
    {id:2, english: true, spanish: false, te_reo: false},
    {id:3, english: false, spanish: true, te_reo: true},
    {id:4, english: true, spanish: false, te_reo: true},
    {id:5, english: false, spanish: true, te_reo: false}
          ]
    )})
}


