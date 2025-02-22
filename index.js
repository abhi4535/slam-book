const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const pDiary = require("./model/pDiary");
mongoose
  .connect("mongodb://127.0.0.1:27017/slam-book")
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log("something went wrong");
    console.log(e);
  });

app.listen(4000, () => {
  console.log("listening to port 4000");
});

app.get("/", (req, res) => {
  res.send("this is slam-book");
});
