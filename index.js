const express = require("express");
const path = require("path");
const app = express();
const { host, port, nicknames, quotes } = require("./config.js");

app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.listen(port, host, console.log(`Listening on ${host}:${port} !`));
