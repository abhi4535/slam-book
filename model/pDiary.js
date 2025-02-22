const mongoose = require("mongoose");
const { Schema } = mongoose;

const pDiarySchema = new Schema({
  personalWrite: {
    type: String,
  },
  personalInfo: {
    userDp: String,
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["M", "F", "T"],
    },
  },
});

module.exports = mongoose.model("pDiary", pDiarySchema);
