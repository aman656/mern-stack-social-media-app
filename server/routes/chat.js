const router = require("express").Router();
const chat = require("../models/chat");

router.post("/", async (req, res) => {
  try {
    const newchat = await new chat({
      members: [req.body.senderid, req.body.recieverid],
    }).save();
    res.status(200).json(newchat);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:uid", async (req, res) => {
  try {
    const chatting = await chat.find({
      members: { $in: [req.params.uid] },
    });
    res.status(200).json(chatting);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
