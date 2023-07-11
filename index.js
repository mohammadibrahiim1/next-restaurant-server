const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/category");
const menuRouter = require("./routes/menu");
const app = express();
// const categoryHandler = require("./routes/category");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// const { MongoClient, ServerApiVersion } = require("mongodb");
// mongoose.connect(
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wuwpwwx.mongodb.net/next-restaurant?retryWrites=true&w=majority`;
// );
mongoose.connect(uri);
console.log(uri);

app.get("/", (req, res) => {
  res.send("Simple node server running");
});

app.use("/api/v1", router);
app.use("/api/v1", menuRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

async function run() {
  try {
  } finally {
  }
}
run().catch(console.dir);
