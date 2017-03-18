require('dotenv').config();
const morgan = require('morgan');
const bunyan = require('bunyan');
const logConfig = require('./config/logger');
const log = bunyan.createLogger({name: logConfig.title});
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = require('express')();

const database = require('./config/database');

const passport = require('./app/authentication/passport')(app);

const userRouter = require('./app/routes/users');

const User = require('./app/models/user');
const uuid = require("uuid");

mongoose.Promise = global.Promise;
mongoose.connect(database.uri);



app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/users',function(req, res, next) {
    req.log = log.child({reqId: uuid()});
    next();
});

app.use('/users', passport.authenticate('oauth-bearer', {session: false}),userRouter(User));

const port = process.env.PORT || 3000;
app.listen(port, function () {
    log.info(`Application listening on port ${port}`);
});


