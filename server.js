const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userService = require('./service/user')
app.set('views', './views');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
var cookieSession = require('cookie-session')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))
   

app.set('view engine', 'ejs');

// routing
app.get('/hello', function (req, res) {
    res.send("hello route")
})

// Login
app.get('/login', function (req, res, next){
    res.render('login')
})
app.post('/login',function (req,res,next){
    const user = userService.findUserByEmail(req.body.email)
    if(!user || !verifyPassword(req.body.password, user.password)){
        return res.render('login')
    }
    req.session.userID = user.displayName
    req.session.doList = user.doList
    res.redirect('/')
   
   
})


function verifyPassword(password, dbPassword){
   return password == dbPassword
}

// session

app.get('/', function (req, res){ 
if(req.session.userID == null)
{
    res.redirect('/login')
}
else
{
  req.session.views = (req.session.views || 0) + 1
  const userID = req.session.userID
  res.render('index', { views: req.session.views, userID, doList: req.session.doList})
}
})


app.get('/sum', function (req, res){
    res.render('index')
})

// public a folder to UI
app.use(express.static('public'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

