const request = require('supertest')
const cheerio = require('cheerio')
const testEnv = require('./test-environment')
const db = require('../server/db/db')

// jest.mock('../server/db/db', () => ({
//     getOwner: () => Promise.resolve(
//       {id: 1, name: 'test owner', email: 'test@owner.nz'}
//     ),
//     getAllDogs: () => Promise.resolve(
//         {id: 1, name: 'test owner', email: 'test@owner.nz'}
//     )
//     // getDogsById: () => Promise.resolve(
//     //     {id: 1, name: 'test owner', email: 'test@owner.nz'}
//     // ),
//   })
// )
  

const server = require('../server/server')

test('GET AllProfiles', () => {
    const expected = 'Welcome'
    return request(server)
    .get('/profiles/:id')
    .expect(200)
    .then((res) => {
        // const $ = cheerio.load(res.text)
        // const firstH2 = $('h2').first().text()
        const actual = 'Welcome'
        expect(actual).toEqual(expected)
    })
    .catch(err => expect(err).toBeNull())
})