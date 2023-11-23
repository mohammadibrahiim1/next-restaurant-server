const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const router = require("./routes/category");
const menuRouter = require("./routes/menu");
const popularItemsRouter = require("./routes/popularItems");
const offerItemsRouter = require("./routes/offerItems");
const cartRouter = require("./routes/cart");
const categoryRouter = require("./routes/category");
const branchRouter = require("./routes/branch");
const session = require("express-session");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = process.env.PORT || 5000;

const crypto = require("crypto");
// const User = require("./schemas/User");
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
// app.use("/api/v1", createUserRouter);
// app.use("/api/v1", createUserRouter);

// passport.js setup
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const client = new MongoClient(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await client.connect();

        const db = client.db("next-restaurant");
        const user = await db.collection("users").findOne({ email });

        client.close();

        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();

    const db = client.db("next-restaurant");
    const user = await db.collection("users").findOne({ _id: id });

    // client.close();

    done(null, user);
  } catch (error) {
    done(error);
  }
});

// const usersCollection = db.collection("users");
async function run() {
  try {
    app.post("/signup", passport.authenticate("local"), async (req, res) => {
      // const users = req.body;
      // const result = await usersCollection.insertOne(users);
      // res.send(result);
      const { email, password } = req.body;
      console.log(email, password);
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = user.save({ email, password: hashedPassword }, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send({ message: "Error signing up user" });
        }

        res.send(result, { message: "successfully signed up" });

        console.log(result);
      });
    });

    app.post("/login", passport.authenticate("local"), (req, res) => {
      res.json({ message: "login successful", user: req.user });
    });

    app.get("/logout", (req, res) => {
      req.logOut();
      res.json({ message: "Logout successful" });
    });
  } finally {
  }
}
run().catch(console.dir);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/success");
  }
);
app.listen(port, () => {
  console.log(`Food king Server is running on ${port}`);
});

app.get("/", (req, res) => {
  res.send("Food king restaurant node server running");
});
