exports.signUp = function (req, res, next) {
    
    var signUpUser = global.db.User.build({
        user_id: req.body.user_id,
        user_secret: req.body.user_secret,
        user_name: req.body.user_name,
        user_email: req.body.user_email
    });

    signUpUser.save().then(function(){
        res.send( _status.succeed);
    }).catch(function(err){
        _status.msg = err;
        res.send( _status.failed);
    });

};