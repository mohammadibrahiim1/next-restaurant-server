const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./schemas/User");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (!user) {
          return done(null, false, { message: "Email not found" });
        }
        user.validatePassword(password, (passwordErr, isMatch) => {
          if (passwordErr) {
            return done(passwordErr);
          }

          if (!isMatch) {
            return done(null, false, { message: "Incorrect password" });
          }
          return done(null, user);
        });
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
