const express = require("express");
const cors = require("cors");
const session = require("express-session");
const KnexSessionsStore = require("connect-session-knex")(session);

const authRouter = require("./auth/auth-router.js");
const userRouter = require("./users/users-router.js");
const knexConnection = require("./data/db-config.js");

const server = express();

const sessionOptions = {
  name: "sessionOptions",
  secret: process.env.COOKIE_SECRET || "secret secret",
  cookie: {
    secure: process.env.COOKIE_SECURE || false,
    maxAge: 1000 * 60 * 60 * 24 * 2,
    httpOnly: true
  },
  resave: false,
  saveUnitialized: true,
  store: new KnexSessionsStore({
    knex: knexConnection,
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
};

server.use(express.json());
server.use(cors());
server.use(session(sessionOptions));

server.use("/auth", authRouter);
server.use("/users", userRouter);

server.get("/", (req, res) => {
  res.json({ api: "hey, thats good news!", session: req.session });
});

module.exports = server;
