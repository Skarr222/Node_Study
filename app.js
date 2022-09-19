const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

app.use(bodyParser.json());

/*
 * MiddLewares
 * app.use(auth);
 * app.use("/posts", () => {
 *  console.log("This is middleware running");
 * });
 */

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//app.use("/user", userRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on post");
});

//HARD CODE CONNETION TO DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB!")
);

//How to start listening to the server
app.listen(3000);
