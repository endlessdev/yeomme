exports.signUp = function (req, res, next) {

    global.db.User.findOne({where: {user_id: req.params.userID}}).then(function (findUserData) {
        if ((findUserData === null || findUserData === undefined) === false) {
            //userID is already exist
            res.send(_status.conflict);
        } else {
            var signUpUser = {
                user_id: req.params.userID,
                user_secret: req.body.user_secret,
                user_name: req.body.user_name,
                user_email: req.body.user_email
            };

            global.db.User.create(signUpUser).then(function (createUserData) {
                _status.succeed.data = createUserData;
                return res.send(_status.succeed);
            }).catch(function (err) {
                _status.failed.error = err;
                return res.send(_status.failed);
            });
        }
    });
};