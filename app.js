const http = require("http");
const express = require("express");

const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//How to start listening to the server
app.listen(3000);
