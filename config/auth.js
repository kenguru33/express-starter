
const config = {

    azureAuth: {
        identityMetadata: process.env.IDENTITY_METADATA,
        clientID: process.env.CLIENT_ID,
        clientKey: process.env.CLIENT_KEY,
        audience: process.env.AUDIENCE,
        validateIssuer: process.env.VALIDATE_ISSUER,
        passReqToCallback: process.env.PASS_REQ_TO_CALLBACK,
    },

    facebookAuth: {

    },

    twitterAuth: {

    }

};

module.exports = config;