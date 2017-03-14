const userController = require('../app/controllers/userController');
const passport = require('../app/authentication/passport');

const routes = function (app, passport) {

    app.get('/',passport.authenticate('oauth-bearer'), {session: false}, (req,res)=>{

        res.send('jabba dabba');
    });

    app('/user', userController);

};

module.exports = routes;
