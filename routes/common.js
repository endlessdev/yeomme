exports.index = function (req, res) {
    res.render('partials/static', {
        page: 'index',
        asset: [
            {type: "css", path: "/css/index.css"}
        ],
        generateAssets,
        content: '../page/index.ejs'
    });
};


exports.aboutme = function (req, res) {
    res.render('partials/static', {
        page: 'aboutme',
        asset: [
            {type: "css", path: "/css/index.css"},
            {type: "css", path: "/css/aboutme.css"}
        ],
        generateAssets,
        content: '../page/aboutme.ejs'
    });
};

exports.writer = function (req, res) {
    res.render('partials/static', {
        page: 'writer',
        asset: [
            {type: "css", path: "/css/index.css"},
            {type: "css", path: "/css/writer.css"}
        ],
        generateAssets,
        content: '../page/writer.ejs'
    });
};

function generateAssets(param) {
    switch (param.type) {
        case "css":
            return '<link rel="stylesheet" href="' + param.path + '">';
            break;
        case "js":
            return '<script src="' + param.path + '"></script>';
            break;
    }
}