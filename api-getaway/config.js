/*
============================================
; Title:  API GETAWAY
; Author: Devan Wong
; Date:   8 November 2020
; Description: Api getaway 
;===========================================
*/
var config = {};
config.web= {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';
module.exports = config;
