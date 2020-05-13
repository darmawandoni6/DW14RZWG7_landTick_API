const express = require("express");
const router = express.Router();
const image = require("../controllers/image");
const upload = require("../helpers/upload");

router.post("/image", upload.payment.single("IMAGE"), image.create);

module.exports = router;
