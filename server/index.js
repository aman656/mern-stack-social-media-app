const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const chatRoute = require("./routes/chat");
const messageRoute = require("./routes/message");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

dotenv.config();
mongoose.connect(
  process.env.MONGOOSE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connented to database");
  }
);

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully");
  } catch (err) {
    console.log(err);
  }
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoute);

// app.get("/",(req,res)=>{
//     res.send("Home Page")
// })

app.listen(5000, () => {
  console.log("Server is running....");
});
