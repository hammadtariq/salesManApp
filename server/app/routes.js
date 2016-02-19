var express = require('express');
var router = express.Router();
var authController = require('./controllers/authController');

router.get('/login',function(req,res){
    res.redirect('/#login');
});

router.post('/login',authController.login);

router.get('/signup',function(req,res){
    res.redirect('/#signup');
});

router.post('/signup',authController.signup);

module.exports = router;