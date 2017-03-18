const passport = require('passport');
const azureADBearerStrategy = require('./strategies/azure-ad');

module.exports = function (app) {

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(azureADBearerStrategy);

    return passport;

};