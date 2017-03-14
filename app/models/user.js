const db = require('mongoose');

const User = function (db) {

    return db.model('user', userSchema);
};

module.exports = User;
