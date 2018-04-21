var environment = process.env.NODE_ENV || 'development'

const db = require('../db/db')
const server = require('../server')
const express = require('express')
const router = express.Router()

//login page with Libby default user
router.get('/', function (req, res) {
    db.getLibbyProfile()
    .then(user1 => {
        res.json(user1)
    })

})

//put new user data in db
router.post('/user/new', function (req, res) {
    var userData = req.body
    var languageArray = req.body.language
    db.insertLanguage(languageArray)
        .then(id => {
            db.getProfiles()
                .insert({firstname: userData.firstname,
                    lastname: userData.lastname,
                    tagline: userData.tagline,
                    email: userData.email,
                    profilepic: userData.profilepic,
                    language_id: id[0]
                }).then(id => {
                    res.json(id[0])
                })
        })
})
//move insert to db file



// User can view all profiles to match
router.get('/profiles/:id', function (req, res) {
    db.getProfileByID(req.params.id)
     .then(userProfile => {
        db.getProfiles()
        .then(allProfiles => {
            res.json({userProfile, allProfiles})
        })
    })
    })

//user can view a particular profile
router.get("/profiles/:id/view", function (req, res) {
    var query = req.query
    db.getProfileByQuery(query)
        .then(user => {
        db.getLanguageByID(user.id)
        .then(languages=> {
            const langArray = changeObjectToArray(languages)
            res.json({user, langArray})
        })
    })
})



//user can match with other users
router.post("/profiles/:id/view", function (req, res) {
    var id = req.body.id
    var query = req.body.query
    var queryPieces = query.split("")
    var queryNum = queryPieces[4]

    db.checkForMatch(id, query)
    .then(user => {
     db.pushMatch(id, queryNum)
     .then(irrelevantID => {
         db.checkMatches(id, queryNum)
        .then(success => {
            if (success[0]){
                res.json("true")
            }
            else res.json("false")
            })
        })
    })
})

//user can view own profile
router.get("/user/:id", function (req, res) {
    db.getProfileByID(req.params.id)
    .then(user => {
        db.getLanguages(user)
        .then(languages => {
            const langArray = changeObjectToArray(languages)
             res.json({user, langArray})
        })
    })
})

// user can view edit form to edit own profile
router.get('/user/:id/edit', function (req, res) {
   db.getProfileByID(req.params.id)
   .then(user => {
       db.getLanguages(user)
       .then(languages => {
           const langArray = changeObjectToArray(languages)
            res.json({user, langArray})
       })
   })
})

//user can edit their existing user data in db
    router.put('/user/:id/edit', function (req, res) {
        var userData = req.body
        var languageArray = req.body.language
        db.getLanguageByID(userData.id)
            .then(user => {
                db.updateLanguage(languageArray, user.id)
                    .then(id => {
                        db.getProfileByID (userData.id)
                                .update({firstname: userData.firstname,
                                lastname: userData.lastname,
                                tagline: userData.tagline,
                                email: userData.email,
                                profilepic: userData.profilepic})
                                .then(userId => {
                                res.sendStatus(201)
                                })
                        })
                })
})

function changeObjectToArray(obj) {
    const arr = Object.keys(obj)
    const langArr = arr.filter(item => {
        if(item === 'id'){
            return false
        } else if (obj[item]) {
            return item
        }
    })
    return langArr
}


module.exports = router
