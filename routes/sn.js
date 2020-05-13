const express = require("express");
const router = express.Router();
const sn = require("../controllers/sn");

// router.get("/order", authenticated, order.show);
router.get("/sn/:id", sn.showById);
router.get("/sn-name/:name", sn.showByKode);
router.get("/sn", sn.show);
router.post("/sn", sn.create);
router.put("/sn/:kode", sn.update);

module.exports = router;
