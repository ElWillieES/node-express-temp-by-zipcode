const path = require("path");
const express = require("express");
const logger = require("morgan");
const requestId = require("express-request-id")();

const port = 3000;

const app = express();
app.disable("x-powered-by");

app.use(requestId);
app.use(logger("short"));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

//app.get(/^\/(\d{5})$/, (req, res, next) => {
app.get(/^\/api\/zip\/(\d{5})$/, (req, res, next) => {
    const zipcode = req.params[0];

  const temperature = Math.floor(Math.random() * (40 - 5 + 1)) + 5;

  res.json({ zipcode: zipcode, temperature: temperature });
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});