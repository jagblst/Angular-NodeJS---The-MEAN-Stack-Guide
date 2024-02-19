const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");

const app = express();

mongoose
  .connect(
    "mongodb+srv://jagblst:67PlKjxXglodwrVI@cluster0.4q7kbiv.mongodb.net/node-angular"
  )
  .then(() => console.log("Connected to MongDB"))
  .catch(() => console.log("Connection failed!"));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false})); -example

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
