const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

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
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({ title: req.body.title, content: req.body.content });
  post.save();
  res.status(201).json({
    message: "Post added succesfully.",
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "1234567",
      title: "First server-side post",
      content: "This is coming from the server",
    },
    {
      id: "7654321",
      title: "Second server-side post",
      content: "This is coming from the server too",
    },
  ];
  res.status(200).json({ message: "Post fetched succesfully!", posts: posts });
});

module.exports = app;
