const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

// Get array of comments associated with particular post's ID
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []); // Send array of comments at the given id. If undefined, send new empty array.
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex"); // Generate random ID for comment
  // Expected request body {content: string}
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || []; // Check if there's already an array for the given id. If undefined, return new empty array.
  comments.push({ id: commentId, content, status: "pending" }); // Push new comment into comments array

  // Assign comments array back to given post inside commentsByPostId object to update it with new content
  commentsByPostId[req.params.id] = comments;

  // Emit event to event bus upon creation of new comment
  await axios
    .post("http://localhost:4005/events", {
      type: "CommentCreated",
      data: {
        id: commentId,
        content,
        postId: req.params.id,
      },
    })
    .catch((err) => {
      console.log(err.message);
    });

  res.status(201).send(comments); // Send back entire array of comments
});

app.post("/events", (req, res) => {
  // Print out type of event received from event bus
  console.log("Event Received", req.body.type);

  // Respond to post request and indicate it went fine
  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on port 4001");
});
