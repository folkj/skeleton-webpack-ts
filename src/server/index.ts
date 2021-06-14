const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, *, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use("/public", express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile("client.html", { root: path.join(__dirname, "../public") });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening");
});
