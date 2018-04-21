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
    })
}

export function getProfileByQuery(query, callback) {
    request
    .get(urlThing + '/profiles/:id/view' + query)
    .end((err, res) => {
        callback(err, res.body)
    })
}

export function checkForMatch (body, callback) {
    request
    .post(urlThing + '/profiles/:id/view')
    .send(body)
    .end((err, res) => {
        console.log("api ", res.body)
        callback(err, res.body)
    })
}

export function getUser(id, callback) {
    request
    .get(urlThing + '/user/' + id)
    .end((err, res) => {
        callback(err, res.body)
    })
}