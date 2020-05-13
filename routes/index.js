module.exports = function index(req, res) {
    if (!req.session.userID) {
        res.redirect('/login');
    } else {
        if (res.locals.currentUser.userType == 1) {
            res.render('admin');
        } else {
            res.render('index');
        }
    }
};