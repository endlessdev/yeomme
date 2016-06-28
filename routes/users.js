var mongoose = require('mongoose');

var UserModel = database.model('User');

exports.signUp = function (req, res, next) {
    var requestParam = {
        userId: req.body.userId,
        userPw: req.body.userPw,
        userEmail: req.body.userEmail
    };

    var signUpUser = new UserModel(requestParam);

    signUpUser.save(function(err, silence){
       if(!err){
           res.render(requestParam);
       }else{
           console.log(err);
       }
    });

};