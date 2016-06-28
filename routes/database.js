/**
 * @desc write databases schema through mongoose ODM
 * @author Seungwoo Yeom ysw0094@gmail.com
 * @required index.js, search.js etc..
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

var connectWithRetry = function () {
    return mongoose.connect(process.env.MONGO_URI, function (err) {
        if (err) {
            setTimeout(connectWithRetry, 5000);
        }
    });
};

var database = connectWithRetry();

var userScheme = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    userPw: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        match: emailRegex,
        unique: true,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }

});

var postScheme = new Schema({
    postId: {
        type: Number,
        required: true
    }
    ,
    authorId: {
        type: String,
        required: true
    },
    isPrivate: {
        type: Boolean,
        required: true,
        default: false
    },
    postSubject: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    postDate: {
        type: Date,
        required: true
    },
    postTitleImg: {
        type: String,
        required: true
    }
});

database.model('User', userScheme, 'users');
database.model('Post', postScheme, 'posts');

module.exports = database;
