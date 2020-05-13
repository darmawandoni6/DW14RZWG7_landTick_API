const express = require("express");
const router = express.Router();
const upload = require("../helpers/upload");
const payment = require("../controllers/payment");
const image = require("../controllers/image");

router.get("/payment", payment.show);
router.get("/payment/:id", payment.showByIdOrder);
router.post("/payment", upload.payment.single("IMAGE"), image.imgPayment);

module.exports = router;
