const express = require("express");
const router = express.Router();
const { authenticated } = require("../helpers/jwtKey");
const train = require("../controllers/train");

router.get("/train/:tgl", train.show);
router.get("/train-id/:id", train.showById);
router.get("/dari", train.showDariKota);
router.get("/tiba", train.showTibaKota);
router.get("/count/:tgl", train.showCount);
router.post("/search-train", train.search);

router.post("/train", train.create);
router.post("/trains", train.bulkCreate);

// router.get("/user/:id", user.showById);
// router.post("/login", user.login);
// router.get("/login", authenticated, user.showByToken);

module.exports = router;
