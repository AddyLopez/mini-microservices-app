const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

// Get array of comments associated with particular post's ID
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []); // Send array of comments at the given id. If undefined, send new empty array.
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex"); // Generate random ID for comment
  // Expected request body {content: string}
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || []; // Check if there's already an array for the given id. If undefined, return new empty array.
  comments.push({ id: commentId, content }); // Push new comment into comments array

  // Assign comments array back to given post inside commentsByPostId object to update it with new content
  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments); // Send back entire array of comments
});

app.listen(4001, () => {
  console.log("Listening on port 4001");
});
