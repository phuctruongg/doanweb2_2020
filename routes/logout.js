module.exports = function logout(req, res) {
    delete req.session.userID
    res.redirect('/login')
};