exports.signUp = function (req, res, next) {

    global.db.User.findOne({where: {user_id: req.params.userID}}).then(function (findUserData) {
        if ((findUserData === null || findUserData === undefined) === false) {
            //userID is already exist
            _status.conflict.status.message = "이미 존재하는 아이디 입니다.";
            res.status(_status.conflict.status.code);
            res.send(_status.conflict);
        } else {
            var signUpUser = {
                user_id: req.params.userID,
                user_secret: db.User.generateHash(req.body.user_secret),
                user_name: req.body.user_name,
                user_email: req.body.user_email
            };

            global.db.User.create(signUpUser).then(function (createUserData) {
                createUserData.generateToken(signUpUser.user_secret, function (err, token) {
                    console.log(token);
                    if (err) {
                        _status.failed.errors = err.errors;
                        res.send(_status.failed.status.code);
                        return res.send(_status.failed);
                    } else {
                        global.db.User.update({user_token: token}, {
                                where: {
                                    user_id: signUpUser.user_id
                                }
                            }
                        ).success(function () {
                            console('ㅋㅋ')
                        })
                    }
                    createUserData.token = token;
                });

                _status.succeed.data = createUserData;
                res.status(_status.succeed.status.code);
                return res.send(_status.succeed);

            }).catch(function (err) {
                _status.failed.errors = err.errors;
                res.status(_status.failed.status.code);
                return res.send(_status.failed);
            });
        }
    });
};

exports.signIn = function (req, res, next) {

    var inputParam = {
        user_id: req.body.user_id,
        user_secret: req.body.user_secret
    };

    global.db.User.findOne(inputParam).then(function (findUserData) {
        if ((findUserData === null || findUserData === undefined) === false) {
            //로그인 성공
            _status.succeed.data = createUserData;
            res.status(_status.succeed.status.code);
            return res.send(_status.succeed);
        } else {
            //로그인 실패
        }
    })

};