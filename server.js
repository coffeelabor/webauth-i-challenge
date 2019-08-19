const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("hey, thats good news!");
});

module.exports = server;
