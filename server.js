const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstrackerDB", 
{ useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true});

app.use(require('./routes/appRoutes'));
app.use(require('./routes/index'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});