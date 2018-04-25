import request from 'superagent'
const urlThing = '/api/v1/'

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

export function getUserForChat(chatters, callback) {
    request
    .get(urlThing + '/profiles/' + chatters.id + '/chat/' + chatters.query)
    .end((err, res) => {
        callback(err, res.body)
    })
}

export function getChats(chatters, callback) {
    request
    .get(urlThing + '/profiles/' + chatters.id + '/chatwith/' + chatters.query)
    .end((err, res) => {
        callback(err, res.body)
    })
}

export function pushMessageToDb (message, callback) {
    request
    .post(urlThing + '/profiles/:id/chat')
    .send(message)
    .end((err, res) => {
        callback(err, res.body)
    })
}

export function getUserToEdit(id, callback) {
    request
    .get(urlThing + '/user/' + id + '/edit')
    .end((err, res) => {
        callback(err, res.body)
    })
}

export function editUserData (user, callback) {
    request
    .put(urlThing + '/user/:id/edit')
    .send(user)
    .end((err, res) => {
        callback(err, res.body)
    })
}

export function unmatch (matchers, callback) {
    console.log({matchers})
    request
    .del(urlThing + '/profiles/:id/chat')
    .send({matchers})
    .end((err, res) => {
        callback(err, res.body)
    })
}



