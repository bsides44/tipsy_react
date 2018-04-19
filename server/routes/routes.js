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
                    profilepic: userData.profilepic
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
    .then(profile=> {
        res.json(profile)
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
            console.log("route success ", success)
            if (success[0]){
                res.sendStatus(200)}
            else res.sendStatus(204)
            })
        })
    })
})
//working, now need to sort out responses in api_index
//check matches not working

//success page
router.get("/success/", function (req, res) {
    res.render("success")
})


//user can view own profile
router.get("/user/:id", function (req, res) {
    db.getProfileByID(req.params.id)
        .then(user => {
            res.render("user", user)
        })
})

// user can view edit form to edit own profile
router.get('/user/:id/edit', function (req, res) {
   db.getProfileByID(req.params.id)
   .then(user => {
       res.render('form', user)
   })
})
//need to have form prefilled out instead of placeholder


//user can edit their existing user data in db
    router.post('/user/:id/edit', function (req, res) {
        var userData = req.body
        var languageArray = req.body.language
        db.getLanguageByID(req.params.id)
            .then(user => {
                db.updateLanguage(languageArray, user.id)
                    .then(id => {
                        db.getProfileByID (req.params.id)
                                .update({firstname: userData.firstname,
                                lastname: userData.lastname,
                                tagline: userData.tagline,
                                email: userData.email,
                                profilepic: userData.profilepic})
                                .then(userId => {
                                res.redirect('/profiles/1')
                                })
                        })
                })
})


module.exports = router
