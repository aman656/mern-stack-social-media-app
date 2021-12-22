const mongoose = require("mongoose");

const postModel = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      max: 400,
    },
    image: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postModel);
