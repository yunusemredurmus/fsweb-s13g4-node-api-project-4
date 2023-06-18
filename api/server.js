const express = require("express");
const server = express();
const routes = require("./users/users-router.js");

server.use(express.json());

server.use("/api/users", routes);

server.get("/", (req, res) => {
  res.send("<h1> Node APP is working</h1>");
});

module.exports = server;
