/*
============================================
; Title:  API GETAWAY
; Author: Devan Wong
; Date:   7 December 2020
; Description: Api getaway 
;===========================================
*/


var jwt = require('jsonwebtoken');
var config = require('./config');

// Check the HTTP header for a valid JSON web token 
// @param req
// @param res
// @param next

//if token is valid, verify token, assign ID to decode ID can call next
function checkToken(req, res, next) {

    var token = req.headers['x-access-token'];

    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.'});

    jwt.verify(token, config.web.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}


module.exports = checkToken;