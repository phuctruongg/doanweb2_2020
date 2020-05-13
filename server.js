const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
var cookieSession = require('cookie-session');
// db import
const db = require('./services/db')
const user = require('./services/user');
// routing import
const { routetoAdmin } = require('./routes/adminRoute/admin');
// lib import
const app = express();
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static("lib"));

// auth midleware setup
app.use(require('./middleware/auth'));
// db setup
db.sync().then(function() {
    // listening port 
    app.listen(port)
    console.log(`server is listening  on ${port}`);

}).catch(function(error) {
    // fail case
    console.error(error)
})

// routing
app.get('/', require('./routes/index'))
app.use('/login', require('./routes/login'));
app.get('/index', require('./routes/index'));
app.get('/admin', routetoAdmin);
app.get('/logout', require('./routes/logout'))