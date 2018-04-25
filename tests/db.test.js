const testEnv = require('./test-environment')
const db = require('../server/db/db')

let testDb = null

beforeEach(function () {
    testDb = testEnv.getTestDb()
    return testEnv.initialise(testDb)
})

afterEach(function () {
    testEnv.cleanup(testDb)
})

test('insert language inserts languages and returns insert id', function () {
    const languageArray = ['english', 'te_reo']
    const expected = 3;
    return db.insertLanguage(languageArray, testDb)
    .then(function (insertID) {
        const actual = insertID[0]
        expect(actual).toBe(expected)
    })
})

