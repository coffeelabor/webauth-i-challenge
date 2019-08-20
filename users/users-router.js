const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

const router = express.Router();

router.post("/register", (req, res) => {});

module.exports = router;
