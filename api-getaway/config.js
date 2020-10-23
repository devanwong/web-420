var config = {};
config.web= {};
config.web.secret = 'top secret';
config.web.port = process.env.PORT || '3000';
module.exports = config;
