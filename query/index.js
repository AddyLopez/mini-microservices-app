const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Get list of posts
app.get("/posts", (req, res) => {});

// Route receives events from event bus
app.post("/events", (req, res) => {});

app.listen(4002, () => {
  console.log("Listening on Port 4002...");
});
