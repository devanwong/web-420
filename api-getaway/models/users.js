const header = require('../../wong-header');
console.log(header.display('Devan', 'Wong', 'API Getaway'));
/*
============================================
; Title:  API GETAWAY
; Author: Devan Wong
; Date:   8 November 2020
; Description: Api getaway 
;===========================================
*/

// FIELDS USER NAME, PASSWORD, AND EMAIL
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String, 
    password: String,
    email: String
});

module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

module.exports = mongoose.model('User', userSchema);

