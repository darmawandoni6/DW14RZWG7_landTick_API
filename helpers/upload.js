const multer = require("multer");
const path = require("path");

const payment = multer.diskStorage({
  destination: path.join(__dirname + "./../images/payment"),
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

exports.payment = multer({ storage: payment });
