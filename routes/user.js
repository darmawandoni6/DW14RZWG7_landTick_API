const express = require("express");
const router = express.Router();
const { authenticated } = require("../helpers/jwtKey");
const user = require("../controllers/user");

router.get("/user", user.show);
router.get("/user/:id", user.showById);
router.get("/login", authenticated, user.showByToken);
router.post("/user", user.register);
router.post("/login", user.login);

module.exports = router;
