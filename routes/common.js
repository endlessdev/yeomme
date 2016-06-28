exports.index = function (req, res) {
    res.render('page/index', {
        page: 'index'
    });
};

exports.aboutme = function (req, res) {
    res.render('page/aboutme', {
        page: 'aboutme'
    });
};

exports.writer = function (req, res) {
    res.render('page/writer', {
        page: 'writer'
    });
};