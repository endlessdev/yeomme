exports.newPost = function (req, res, next) {

    var createPost = {
        title: req.body.title,
        content: req.body.content,
        category_idx: req.body.category_idx
    };

    global.db.Post.create(createPost).then(function (createdPost) {
        _status.succeed.data = createdPost;
        res.status(_status.succeed.code);
        return res.send(_status.succeed);
    }).catch(function (err) {
        _status.failed.errors = err.errors;
        res.status(_status.failed.status.code);
        return res.send(_status.failed);
    });
};

exports.getPost = function (req, res, next) {
    global.db.Post
        .findAll({limit: req.body.limit || 12})
        .success(function (posts) {
            _status.succeed.data = posts;
            res.status(_status.succeed.status.code);
            return res.send(_status.succeed);
        }).catch(function (err) {
        _status.failed.errors = err.errors;
        res.status(_status.failed.status.code);
        return res.send(_status.failed);
    });
};