const passport = require('passport');
const BearerStrategy = require('passport-azure-ad').BearerStrategy;

const options = {
    identityMetadata: process.env.IDENTITY_METADATA,
    clientID: process.env.CLIENT_ID,
    audience: process.env.AUDIENCE,
    validateIssuer: process.env.VALIDATE_ISSUER,
    passReqToCallback: process.env.PASS_REQ_TO_CALLBACK
};

let owner = null;

const bearerStrategy = new BearerStrategy(options, (token, done) => {

    if (!token.oid) {

    done(new Error('oid is not found in token'));
    } else {

        owner = token.oid;
        done(null, token);
    }
});

passport.use(bearerStrategy);


