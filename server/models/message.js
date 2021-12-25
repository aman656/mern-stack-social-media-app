const mongoose = require("mongoose");

const messageModel = new mongoose.Schema(
  {
    chatid: {
      type: String,
    },
    sender: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("message", messageModel);
