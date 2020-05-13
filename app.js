"use strict";

const express = require("express");
const bodyPrser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyPrser.urlencoded({ extended: false }));
app.use(bodyPrser.json());
app.use(express.static("images"));

//import routes
//------------------------
const user = require("./routes/user");
const train = require("./routes/train");
const order = require("./routes/order");
const sn = require("./routes/sn");
const payment = require("./routes/payment");
const image = require("./routes/image");

//use route
app.get("/", (req, res) => {
  res.send("Hello !!");
});

// use route
app.use("/api", user);
app.use("/api", train);
app.use("/api", order);
app.use("/api", sn);
app.use("/api", payment);
app.use("/api", image);

//------------------------

module.exports = app;
