const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const Project = require("./models/Project");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
//9hx8U2cJ8qf2iRyP

const salt = bcrypt.genSaltSync(10);

try {
  mongoose.connect(
    "mongodb+srv://waglesudip8:9hx8U2cJ8qf2iRyP@cluster0.b85b8mv.mongodb.net/?retryWrites=true&w=majority"
  );
} catch (e) {
  console.log(e);
}

app.post("/register", async (req, res) => {
  const { usernam, email, password, field, about } = req.body;
  console.log("request received");

  try {
    await User.create({
      username: usernam,
      email,
      password: bcrypt.hashSync(password, salt),
      rated: [],
      aboutme: about,
      field: field.toLowerCase(),
      rating: 0,
      totalraters: 0,
    });
    res.status(300).json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(333).json(e);
  }
});
app.get("/findcoders/:cat", async (req, res) => {
  console.log("python request received");
  const { cat } = req.params;

  res.json(await User.find({ field: cat }).sort({ rating: -1 }).limit(3));

  // console.log(foundinfo);
});
app.get("/find/:user", async (req, res) => {
  const { user } = req.params;
  res.json(await User.find({ username: user }));
});

app.post("/rate", async (req, res) => {
  const { token } = req.cookies;
  const { rat, ue, userin } = req.body;
  const fg = await User.find({ username: ue });

  var deg = (fg[0].rating)*(fg[0].totalraters) + rat;
  var cc = (fg[0].totalraters) + 1;
  var u = Number(deg);
  var v = Number(cc);

  up = Math.floor(u/v);
  console.log(deg);
  console.log(cc);
  console.log(deg);

    await User.findOneAndUpdate(
      { username: ue },
      { rating: up, totalraters: v }
    );
    
    res.status(303).json("rating added");

});

app.get("/findproject/:usernam", async (req, res) => {
  // console.log("python request received");
  const { usernam } = req.params;

  res.json(await Project.find({ username: usernam }));
});

app.get("/users", async (req, res) => {
  res.json(await User.find().sort({ rating: -1 }).limit(10));
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // console.log('request received.')
  try {
    const info = await User.findOne({ username });

    const pass = bcrypt.compareSync(password, info.password);
    // res.json(pass);
    // console.log(pass)
    if (pass) {
      // logged in
      jwt.sign({ username, id: info._id }, "segg@#$23r", (err, token) => {
        if (err) throw err;
        // res.json(token);
        res.cookie("token", token).json({
          id: info._id,
          username,
        });
      });
    }
  } catch (e) {
    res.status(404).json("wrong credentials");
  }
});

app.post("/upload", (req, res) => {
  const { token } = req.cookies;
  const { userin, title, repo, des } = req.body;

  jwt.verify(token, "segg@#$23r", (err, info) => {
    Project.create({
      username: userin,
      title,
      repo,
      des,
    });
    res.status(300).json({ success: true });
  });
});

app.listen(5000, () => {
  console.log("Server started and listening on port 5000");
});
