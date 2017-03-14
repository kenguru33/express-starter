require('dotenv').config();
const config = require('./config');
const express = require('express');

const app = express();
const passport = require('passport');
require('./app/authentication/passport')(app);


app.get('/',passport.authenticate('oauth-bearer',{session: false}), (req, res)=>{

    res.sendt('jabba dabba koko!');
});

app.get('/users', (req,res)=> {

    res.send('joggidoggy');
});

app.listen(3000);