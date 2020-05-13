const { Router } = require('express')
const User = require('../services/user')
const asyncHandler = require('express-async-handler')
const router = new Router()

router.get('/', function(req, res, next) {
    if (!req.session.userID) {
        res.render('login')
    } else {
        res.redirect('index')
    }
})

asyncHandler(router.post('/', async function(req, res, next) {
    const findUser = await User.findUserByUserName(req.body.username)
    if (findUser.password == req.body.password) {
        req.session.userID = findUser.userID
        res.redirect('/index')
    } else {
        console.log("Wrong password")
    }

}))
module.exports = router