const authConfig = require('./../../../config/auth').azureAuth;
const BearerStrategy = require('passport-azure-ad').BearerStrategy;

let owner = null;

const bearerStrategy = new BearerStrategy(authConfig, (token, done) => {

    console.log('fetching ad user profile...')
    if (!token.oid) {

        done (new Error('oid is not found in token'));
    } else {
        console.log('User profile found');
        owner = token.oid;
        done(null, token);
    }
});

module.exports = bearerStrategy;
