const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

// Get list of posts
app.get("/posts", (req, res) => {
  // Send posts object in response
  res.send(posts);
});

// Route receives events from event bus
app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    // Add comment to comments array of a given post
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }
  console.log(posts);
  // Indicate by response empty object that event was received and processed
  res.send({});
});

app.listen(4002, () => {
  console.log("Listening on Port 4002...");
});
