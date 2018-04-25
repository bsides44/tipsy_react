
exports.seed = function (knex, Promise) {
  return knex('languages').del()
    .then(function () {
  return knex('languages').insert([
    {english: true, spanish: true, te_reo: false},
    {english: true, spanish: false, te_reo: false},
    {english: false, spanish: true, te_reo: true},
    {english: true, spanish: false, te_reo: true},
    {english: false, spanish: true, te_reo: false}
          ]
    )})
}


