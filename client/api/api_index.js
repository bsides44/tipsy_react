import request from 'superagent'
const urlThing = 'http://localhost:3000/api/v1/'

//functions go here

export function getLibbyProfile (callback) {
    request
    .get(urlThing)
    .end((err, res) => {
        callback(err, res.body)
    })
}

export function newUserData (user, callback) {
    request
    .post(urlThing)
    .send(user)
    .end((err, res) => {
        callback(err)
    })
}

export function getProfiles(callback) {
    request
    .get(urlThing + '/profiles')
    .end((err, res) => {
        callback(err, res.body)
    })
}