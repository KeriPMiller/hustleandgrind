const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 4200;

module.exports = app;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Serving the answers on ${PORT}`));
