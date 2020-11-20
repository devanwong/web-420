/*
============================================
; Title:  API GETAWAY
; Author: Devan Wong
; Date:   8 November 2020
; Description: Api getaway 
;===========================================
*/

/**
 Fields username, password, and email
 */

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

const User = module.exports = mongoose.model('User', userSchema);

/**
 Database queries
 */

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
}
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}
//finding users by email 
module.exports.getOne= (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
}