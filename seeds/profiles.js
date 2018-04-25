
exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
return knex('profiles').insert([
    {firstname: 'Libby', lastname: 'lobster', tagline: 'Loves life', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , language_id: '1'},
    {firstname: 'Milly', lastname: 'meadow', tagline: 'Millin around', email: 'libby@lobster.clam', profilepic: 'https://s-media-cache-ak0.pinimg.com/originals/17/6d/54/176d54d309a9ba70bbb7428369ed7fa6.jpg' , language_id: '2' },
    {firstname: 'Percy', lastname: 'potter', tagline: 'Garden is life', email: 'libby@lobster.clam', profilepic: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/bc/Percy_WeasleyDH.jpg/revision/latest?cb=20160720032549' , language_id: '3' },
    {firstname: 'Alejandro', lastname: 'alabaster', tagline: '420', email: 'libby@lobster.clam', profilepic: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Alejandro_LG.png/220px-Alejandro_LG.png' , language_id: '4' },
    {firstname: 'Tina', lastname: 'turna', tagline: 'Gettin turnt', email: 'libby@lobster.clam', profilepic: 'https://images.firstpost.com/wp-content/uploads/2017/12/tina-turner-825.jpg' , language_id: '5' }
          ]
    )})
}
