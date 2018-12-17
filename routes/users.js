var express = require('express');
var router = express.Router();
var login = require('../controller/authenticate/login');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* GET users listing. */
router.post('/login', function (req, res, next) {

    const username = req.body.username;
    let loginResult = login(username, req.body.password);

    if (loginResult) {
        res.render('users', {username: username});
    }
    else {
        res.render('index', {error: true});
    }
});

module.exports = router;