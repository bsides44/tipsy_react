const path = require('path')
var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
var db = require('knex')(config)

function getLibbyProfile () {
    return db("profiles")
    .where("id", 1)
    .select().first()
}

function getProfilesAndLanguages() {
    return db("profiles")
    .join("languages", "profiles.language_id", "languages.id")
    .select()
}

function getProfiles() {
    return db("profiles")
}

function getProfileByID (id) {
    // const conn = testDb || db
    return db("profiles")
    .join("languages", "profiles.language_id", "languages.id")
    .where ("profiles.id", id)
    .select().first()
}

function getProfileByQuery (query) {
    // const conn = testDb || db
    return db("profiles")
    .where ("id", query.id)
    .select().first()
}

function getLanguages (user) {
    return db("languages")
    .where("id", user.language_id)
    .select().first()
}

function insertLanguage (languageArray) {
    if (typeof languageArray == "string") {
        //single item is not in an array so .length won't work
        return db("languages")
            .insert({english, spanish, te_reo}),id
        }
    else {
        var english = !!languageArray.find(language => language == 'english')
        var spanish = !!languageArray.find(language => language == 'spanish')
        var te_reo = !!languageArray.find(language => language == 'te_reo')
        return db("languages")
            .insert({english, spanish, te_reo}),id
    }
}


function updateLanguage (languageArray, id) {
    if (typeof languageArray == "string") {
        var english = languageArray.includes("english")
        var spanish = languageArray.includes("spanish")
        var te_reo = languageArray.includes("te_reo")
        return db("languages")
            .where("id", id)
            .update({english, spanish, te_reo})
        }
    else {
        var english = !!languageArray.find(language => language == 'english')
        var spanish = !!languageArray.find(language => language == 'spanish')
        var te_reo = !!languageArray.find(language => language == 'te_reo')
        return db("languages")
            .where("id", id)
            .update({english, spanish, te_reo})
    }
}


function pushMatch (user, profile) {
    return db("matches")
        .insert({"user_id": user, "match_id": profile}),id
}

function checkMatches (userid, profileid) {
    return db("matches")
    .where("match_id", userid )
    .andWhere("user_id", profileid)
}

function getFirstChats (userid, profileid) {
    return db("chats")
    .join("profiles", "chats.user_id", "profiles.id")
    // .join("profiles", "chats.match_id", "profiles.id")
    .where("match_id", userid)
    .andWhere("user_id", profileid)
} 

function getSecondChats (userid, profileid) {
    return db("chats")
    .join("profiles", "chats.user_id", "profiles.id")
    // .join("profiles", "chats.match_id", "profiles.id")
    .where("match_id", profileid)
    .andWhere("user_id", userid)
} 

function messageToDatabase (message) {
    var query = message.query
    var queryPieces = query.split("")
    var queryNum = queryPieces[4]
    return db("chats")
    .insert ({
        user_id: message.id,
        match_id: queryNum,
        message: message.message,
    }),id
}

function getMatches (user) {
    return db("matches")
    .join("profiles", "matches.match_id", "profiles.id")
    .where("user_id", user.id)
}

function getMatchBacks (user) {
    return db("matches")
    .where("match_id", user.id)
}

function removeMatch(id, queryNum) {
    return db("matches")
    .where("user_id", id)
    .andWhere("match_id", queryNum)
    .select().first()
    .del()
}

module.exports = {
    getLibbyProfile,
    getProfiles,
    getProfileByID,
    getLanguages,
    getProfileByQuery,
    insertLanguage,
    getProfilesAndLanguages,
    updateLanguage,
    pushMatch,
    checkMatches,
    getFirstChats,
    getSecondChats,
    messageToDatabase,
    getMatches,
    getMatchBacks,
    removeMatch
}

