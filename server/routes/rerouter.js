const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', function (req, res) {
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
                })
            res.sendStatus(200)
        })
})



module.exports = rerouter