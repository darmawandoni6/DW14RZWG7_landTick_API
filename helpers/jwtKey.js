const expressJwt = require("express-jwt");
exports.key = "JCNRUAD";
exports.authenticated = expressJwt({ secret: this.key });
