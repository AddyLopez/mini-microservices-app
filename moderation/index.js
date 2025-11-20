const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// Purpose of this service is to watch for CommentCreated event(s) and emit CommentModerated event(s)
app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  const flaggedWord = "orange"; // Arbitrary word to flag to moderate comments

  if (type === "CommentCreated") {
    // Decide to approve or reject comment with ternary expression
    const status = data.content.includes(flaggedWord) ? "rejected" : "approved";

    // Emit CommentModerated event to event bus with updated status
    await axios
      .post("http://localhost:4005/events", {
        type: "CommentModerated",
        data: {
          id: data.id,
          postId: data.postId,
          status,
          content: data.content,
        },
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  // Send response so that request handler won't hang
  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on Port 4003...");
});
