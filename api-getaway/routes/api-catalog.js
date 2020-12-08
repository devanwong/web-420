/*
============================================
; Title:  API GETAWAY
; Author: Devan Wong
; Date:   8 November 2020
; Description: Api getaway 
;===========================================
*/

/**
 * API Routes
 */
var express = require('express');
var checkToken = require('../check-token');
var router = express.Router();
var auth_controller = require('../controllers/authController');

//POST request for registering a user
router.post('/auth/register', auth_controller.user_register);
//GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);
//POST allow user login request
router.post('/auth/login', auth_controller.user_login);
//allow user logout request 
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;