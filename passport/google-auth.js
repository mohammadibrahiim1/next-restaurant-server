const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1050413912569-r7haq9f37ipbcgebnjrq3ekkm2pvkh04.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate(
        {
          googleId: profile.id,
        },
        (err, user) => {
          return done(err, user);
        }
      );
    }
  )
);

module.exports = passport;
