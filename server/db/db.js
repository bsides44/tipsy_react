const path = require('path')
var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
var db = require('knex')(config)

function getLibbyProfile () {
    return db("profiles")
    .where("id", 1)
    .select().first()
}

function getProfiles() {
    return db("profiles")
}

function getProfileByID (id) {
    // const conn = testDb || db
    return db("profiles")
    .where ("id", id)
    .select().first()
}

function getProfileByQuery (query) {
    // const conn = testDb || db
    return db("profiles")
    .where ("id", query.id)
    .select().first()
}

function checkForMatch (id, query) {
    console.log("id ", id)
    var queryPieces = query.split("")
    var queryNum = queryPieces[4]
    console.log("queryNum ", queryNum)
    //find the current user
      return db("profiles")
        .where ("id", id)
        .select().first()
}

function insertLanguage (languageArray) {
    if (typeof languageArray == "string") {
        //single item is not in an array so .length won't work
        return db("languages")
            .insert({english, spanish, te_reo})
        }
    else {
        var english = !!languageArray.find(language => language == 'english')
        var spanish = !!languageArray.find(language => language == 'spanish')
        var te_reo = !!languageArray.find(language => language == 'te_reo')
        return db("languages")
            .insert({english, spanish, te_reo})
    }
}

function getLanguageByID (id) {
    return db("profiles")
     .join("languages", "profiles.id", "languages.user_id")
     .where("profiles.id", id)
     .select().first()
}


function updateLanguage (languageArray, id) {
    if (typeof languageArray == "string") {
        var english = languageArray.includes("english")
        var spanish = languageArray.includes("spanish")
        var te_reo = languageArray.includes("te_reo")
        console.log(english)
        return db("languages")
            .where("user_id", id)
            .update({english, spanish, te_reo})
        }
    else {
        var english = !!languageArray.find(language => language == 'english')
        var spanish = !!languageArray.find(language => language == 'spanish')
        var te_reo = !!languageArray.find(language => language == 'te_reo')
        return db("languages")
            .where("user_id", id)
            .update({english, spanish, te_reo})
    }
}


function pushMatch (user, profile) {
    return db("matches")
        .insert({"user_id": user, "match_id": profile})
}

function checkMatches (userid, profileid) {
    return db("matches")
    .where("match_id", userid )
    .andWhere("user_id", profileid)
}

module.exports = {
    getLibbyProfile,
    getProfiles,
    getProfileByID,
    getProfileByQuery,
    checkForMatch,
    insertLanguage,
    getLanguageByID,
    updateLanguage,
    pushMatch,
    checkMatches
}

