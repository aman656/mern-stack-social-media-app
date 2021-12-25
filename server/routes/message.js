const router = require("express").Router();
const message = require("../models/message");

router.post("/", async (req, res) => {
  const newmessage = new message(req.body);
  try {
    const recieve = await newmessage.save();
    res.status(200).json(recieve);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:chatid", async (req, res) => {
  try {
    const allchat = await message.find({
      chatid: req.params.chatid,
    });
    res.status(200).json(allchat);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
