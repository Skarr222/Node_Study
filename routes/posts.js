const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on posts");
});
/*
 * router.checkout("/specific", (req, res) => {
 *   res.send("Specific post");
 * });
 */

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
