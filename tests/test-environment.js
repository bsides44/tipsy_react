// const getDbConn = require('knex')

// const testConfig = require('../knexfile').test


// module.exports = {
//     //Return a database connection for the test database
//     getTestDb: () => getDbConn(testConfig),

//     // Create a separate in-memory db before each test
//     initialise: (db) => {
//         return db.migrate.latest()
//           .then( function () {
//               return db.seed.run()
//           })
//     },

//     // Close the database connection after each test
//     cleanup: (db) => {
//         return db.destroy()
//     }

// }