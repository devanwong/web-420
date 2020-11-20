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
var router = express.Router();
var auth_controller = require('../controllers/authController');

//POST request for registering a user
router.post('/auth/register', auth_controller.user_register);
//POST allow user login request
router.post('/auth/login', auth_controller.user_login);
//GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);
//allow user logout request 
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;