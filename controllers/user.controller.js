const User = require("../schemas/User");

const createUser = (req, res, next) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return next(err);
    }

    const newUser = new User({
      email: email,
      password: hashedPassword,
    });

    newUser.save((err) => {
      if (err) {
        return next(err);
      }
      return res.json({ message: "signup successfully" });
    });
  });
};

module.exports.createUserController = {
  createUser,
};
