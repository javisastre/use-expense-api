const express = require("express");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("morgan");
const port = process.env.PORT;
const publicDomain = "https://use-expense.netlify.app/";

const config = require("./config/db");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log(`useExpense database is connected to port ${process.env.PORT}`);
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

const expenseRoute = require("./routes/expenseRoute");

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(
  cors({
    credentials: true,
    origin: [publicDomain],
  })
);

app.use("/api", expenseRoute);

const server = app.listen(port, function () {
  console.log("Listening on port " + port);
});
