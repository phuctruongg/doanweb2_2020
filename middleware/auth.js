const User = require('../services/user')
const asyncHandler = require('express-async-handler')



module.exports =
    // midleware
    asyncHandler(async function checkAuth(req, res, next) {
        const userID = req.session.userID
            // them vao currentSession mot user toan cuc
        res.locals.currentUser = null
            // check xem nguoi dung co session hay ko, ko co redirect ve trang login
        if (!userID && req.url != '/login') {
            res.redirect('/login');
            return;
        }
        const user = await User.findUserbyID(userID)
        if (!user) {
            return next()
        }
        req.currentUser = user
        res.locals.currentUser = user
        next()
    })