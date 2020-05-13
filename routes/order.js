const express = require("express");
const router = express.Router();
const { authenticated } = require("../helpers/jwtKey");
const order = require("../controllers/order");

router.get("/order", authenticated, order.show);
router.get("/order-tiket", authenticated, order.showById);
router.post("/order", authenticated, order.create);
router.get("/order2", authenticated, order.showByOrder);
router.put("/order/:id", authenticated, order.update);

module.exports = router;
