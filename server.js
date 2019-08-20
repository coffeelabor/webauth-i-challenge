const express = require("express");

const userRouter = require("./users/users-router.js");

const server = express();

server.use(express.json());

server.use("/users", userRouter);

server.get("/", (req, res) => {
  res.send("hey, thats good news!");
});

module.exports = server;
