const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: ["https://bfi-iota.vercel.app", "http://localhost:3000"],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization', 'scheme']
}));


const port = process.env.REACT_APP_PORT || 5000;

app.use(express.json());
const DfsSchema = require("./models/dfsSchema");
const BiomeSchema = require("./models/biomeSchema");

mongoose.connect(process.env.REACT_APP_MONGODB_CONNECT_URI);

app.get("/", async (req, res) => {
  const data = await DfsSchema.find({});
  res.send(data);
});

app.get("/biome", async (req, res) => {
  const data = await BiomeSchema.find({});
  res.send(data);
});

app.get("/biome", async (req, res) => {
  const data = await BiomeSchema.find({});
  res.send(data);
});

app.put("/biomeUpdate/:id", async (req, res) => {
  const id = req.params;
  const data = req.body;
  try {
    console.log(req.body.EOLStatus)
    const post = await BiomeSchema.findByIdAndUpdate(id.id, {
      EOLStatus: req.body.EOLStatus,
      InDiss: req.body.InDiss,
      FormalDiss: req.body.FormalDiss,
      MoUr: req.body.MoUr,
      Mous: req.body.Mous,
      Funds: req.body.Funds,
      ProjectsShortlist: req.body.ProjectsShortlist,
      ProjectsStarted: req.body.ProjectsStarted,
    });
    // {$set:
    // {
    //   EOLStatus: data
    // }
    // }
    // );
    return res.json({ status: "updated", data: post });
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
