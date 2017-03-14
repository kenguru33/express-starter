
const config = {

    env: process.env.NODE_ENV,
    apiKey: process.env.API_KEY,

    database: require('./database'),
    routes: require('./routes'),
    passport: require('./passport')
};

module.exports = config;



