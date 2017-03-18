const express = require('express');
const router = express.Router();
const passport = require('passport');

module.exports = function (User) {

    const userController = require('../controllers/users')(User);
    router.route('/').get(userController.get);
    router.route('/').post(userController.post);
    return router;

};

