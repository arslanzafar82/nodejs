
// const router = require('express').Router();
const UserController = require('../controllers/UserController')
module.exports = function(app){
    app.post('/login', UserController.login);
    app.post('/signup', UserController.signup);

    app.get('/abc', function(req, res){
        res.status(200).json('sss/');
    });
    //other routes..
}


