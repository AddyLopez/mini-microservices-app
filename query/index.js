const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
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

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;

    // Find appropriate comment (by id) that matches event id then update its status and content
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
  }
};

// Get list of posts
app.get("/posts", (req, res) => {
  // Send posts object in response
  res.send(posts);
});

// Route receives events from event bus
app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);
  //console.log(posts);
  // Indicate by response empty object that event was received and processed
  res.send({});
});

app.listen(4002, async () => {
  console.log("Listening on Port 4002...");

  try {
    // Get a listing of all events
    const response = await axios.get("http://localhost:4005/events");

    for (let event of response.data) {
      console.log("Processing event: ", event.type);

      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});
