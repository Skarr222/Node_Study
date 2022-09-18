const http = require("http");
const express = require("express");

const app = express();

/*
 * MiddLewares
 * app.use(auth);
 * app.use("/posts", () => {
 *  console.log("This is middleware running");
 * });
 */

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on post");
});

//How to start listening to the server
app.listen(3000);
