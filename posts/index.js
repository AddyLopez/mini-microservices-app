const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {}; // Store every post created

// Get all posts
app.get("/posts", (req, res) => {
  res.send(posts);
});

// Create a new post
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex"); // Generate random id
  // Expected request body: { title: string }
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
