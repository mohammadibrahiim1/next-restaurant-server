const express = require("express");
const mongoose = require("mongoose");
const passport = require("./passport");
const cors = require("cors");
const router = require("./routes/category");
const menuRouter = require("./routes/menu");
const popularItemsRouter = require("./routes/popularItems");
const offerItemsRouter = require("./routes/offerItems");
const cartRouter = require("./routes/cart");
const createUserRouter = require("./routes/createUser");
const categoryRouter = require("./routes/category");
const branchRouter = require("./routes/branch");
const session = require("express-session");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const port = process.env.PORT || 5000;

const crypto = require("crypto");
const User = require("./schemas/User");
const secret = crypto.randomBytes(32).toString("hex");
console.log("Generated Secret:", secret);

// const categoryHandler = require("./routes/category");
require("dotenv").config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// const { MongoClient, ServerApiVersion } = require("mongodb");
// mongoose.connect(
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wuwpwwx.mongodb.net/next-restaurant?retryWrites=true&w=majority`;
// );
mongoose.connect(uri);
console.log(uri);

app.use("/api/v1", router);
app.use("/api/v1", categoryRouter);
app.use("/api/v1", menuRouter);
app.use("/api/v1", popularItemsRouter);
app.use("/api/v1", offerItemsRouter);
app.use("/api/v1", cartRouter);
app.use("/api/v1", branchRouter);
app.use("/api/v1/signup", createUserRouter);

async function run() {
  try {
    passport.use(
      new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        User.findOne({ email: email }, (err, user) => {
          if (err) return done(err);

          if (!user) return done(null, false, { message: "Incorrect email." });

          bcrypt.compare(password, user.password),
            (err, res) => {
              if (err) return done(err);

              if (res === false)
                return done(null, false, { message: "incorrect password." });

              return done(null, user);
            };
        });
      })
    );

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
        done(err, user);
      });
    });
  } finally {
  }
}

app.all("*", (req, res) => {
  return handle(req, res);
});

app.listen(port, () => {
  console.log(`Foodking Server is running on ${port}`);
});

app.get("/", (req, res) => {
  res.send("Food king restaurant node server running");
});
run().catch(console.dir);
