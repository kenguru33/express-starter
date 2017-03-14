const passport = require('passport');

const auth = function (app) {

    app.use(passport.initialize()); // Starts passport.
    app.use(passport.session()); // Provides session support.

    require('./strategies/azure-ad');
};


module.exports = auth;

