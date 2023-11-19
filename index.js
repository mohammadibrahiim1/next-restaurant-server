const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/category");
const menuRouter = require("./routes/menu");
const popularItemsRouter = require("./routes/popularItems");
const offerItemsRouter = require("./routes/offerItems");
const cartRouter = require("./routes/cart");
const categoryRouter = require("./routes/category");
const branchRouter = require("./routes/branch");
const next = require("next");
const session = require("express-session");
const passport = require("./passport");
const dev = process.env.Node_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 5000;

const crypto = require("crypto");
const secret = crypto.randomBytes(32).toString("hex");
console.log("Generated Secret:", secret);

// const categoryHandler = require("./routes/category");
require("dotenv").config();

const server = express();
app.prepare().then(() => {
  server.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
});
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(passport.initialize());
server.use(passport.session());

// const { MongoClient, ServerApiVersion } = require("mongodb");
// mongoose.connect(
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wuwpwwx.mongodb.net/next-restaurant?retryWrites=true&w=majority`;
// );
mongoose.connect(uri);
console.log(uri);

server.use("/api/v1", router);
server.use("/api/v1", categoryRouter); 
server.use("/api/v1", menuRouter);
server.use("/api/v1", popularItemsRouter);
server.use("/api/v1", offerItemsRouter);
server.use("/api/v1", cartRouter);
server.use("/api/v1", branchRouter);

async function run() {
  try {
    server.post(
      `/api/v1/signup`,
      async (req, res, next) => {
        try {
          const { email, password } = req.body;
          // check if email already taken
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            return res.status(400).json({ message: "Email is already taken" });
          }

          // create a new user
          const newUser = new User({ email });
          newUser.setPassword(password);
          await newUser.save();

          return next();
        } catch (error) {
          return next(error);
        }
      },
      passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/api/v1/signup",
      })
    );
  } finally {
  }
}

server.all("*", (req, res) => {
  return handle(req, res);
});

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

server.get("/", (req, res) => {
  res.send("Food king restaurant node server running");
});
run().catch(console.dir);
