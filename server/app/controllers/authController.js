var express = require('express');
var Firebase = require('firebase');
var firebaseRef = new Firebase("https://salesmanap.firebaseio.com/users");
var UserSchema_1 = require('./../../models/userSchema');

exports.signup = function(req, res){
    var data = req.body.data;
    firebaseRef.createUser({
        email: data.email,
        password: data.pass
    }, function(error, userData) {
        if (error) {
            switch (error.code) {
                case "EMAIL_TAKEN":
                    res.json({message:"The new user account cannot be created because the email is already in use."});
                    break;
                case "INVALID_EMAIL":
                    res.json({message:"The specified email is not a valid email."});
                    break;
                default:
                    res.json({message:"Error creating user"});
            }
        } else {
            data.FirebaseToken = userData.uid;
            UserSchema_1.saveUser(data)
                .then(function(userData){
                    return res.json({success : true, "message" : "Registered Successfully!", user: userData});
                },function(err){
                    return res.json({success : false, "message" : err});
                });
        }
    });
};

exports.login = function(req, res){
    var user = req.body.data;
    UserSchema_1.findUser({ email: user.email })
        .then(function (userInstance) {
            if (!userInstance) {
                return res.json({success:false, message:"No user found with supplied email"});
            }
            else if (userInstance.pass == user.pass) {
                return res.json({success:true, message: "Logged In successfully", token: userInstance.FirebaseToken });
            }
            else {
                return res.json({success:false, message: "Wrong Password", token: userInstance.FirebaseToken });
            }
        }, function (err) {
            return res.json({ status: false, message: err });
        });
};