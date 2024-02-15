const express = require("express");

const app = express();

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
