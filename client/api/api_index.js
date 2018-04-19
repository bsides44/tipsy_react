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
    .post(urlThing + '/user/new')
    .send(user)
    .end((err, res) => {
        callback(err, res.body)
    })
}

export function getProfiles(id, callback) {
    request
    .get(urlThing + '/profiles/' + id)
    .end((err, res) => {
        callback(err, res.body)
        console.log("api", res.body)
    })
}

export function getProfileById(id, query, callback) {
    request
    .get(urlThing + '/profiles/' + id + '/view?id=' + query)
    .end((err, res) => {
        callback(err, res.body)
        console.log("api", res.body)
    })
}