const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// Purpose of this service is to watch for CommentCreated event(s) and emit CommentModerated event

app.post("/events", (req, res) => {});

app.listen(4003, () => {
  console.log("Listening on Port 4003...");
});
