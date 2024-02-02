const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const port = process.env.REACT_APP_PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const DfsSchema = require("./models/dfsSchema");

mongoose.connect(process.env.REACT_APP_MONGODB_CONNECT_URI);

app.get("/", async (req, res) => {
  const data = await DfsSchema.find({});
  res.send(data);
});

app.post("/post", async (req, res) => {
  const post = new DfsSchema({
    title: req.body.Title,
    objective: req.body.Objective,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    Overallprogress: req.body.Overall_progress,
    dashboardItems: req.body.dashboardItems,
  });
  try {
    await post.save();
    if (post.save()) {
      res.send({ Posted: true });
    } else {
      res.send("not saved");
    }
  } catch (err) {
    res.send(err);
  }
});

app.put("/updatepost/:id", async (req, res) => {
  const id = req.params;
  try {
    let updated = await DfsSchema.findByIdAndUpdate(id.id, {
      title: req.body.title,
      objective: req.body.objective,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      Overallprogress: req.body.Overallprogress,
      dashboardItems: req.body.dashboardItems,
    });
    return res.json({ status: "ok", data: updated.dashboardItems });
  } catch (err) {
    res.send(err);
  }
});

app.get("/getpost/:id", async (req, res) => {
  const id = req.params;
  const data = await DfsSchema.findOne({ _id: id.id });
  res.send(data);
});

app.delete("/delPost/:id", async (req, res) => {
  const id = req.params;
  const delPost = await DfsSchema.deleteOne({ _id: id.id });
  try {
    if (delPost) {
      res.send("post deleted");
    } else {
      res.send("no post found");
    }
  } catch (err) {
    res.send(err);
  }
});

app.listen(port || 5000, () => {
  console.log("App is running...", port);
});
