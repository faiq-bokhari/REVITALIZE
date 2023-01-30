const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
    return;
  }
  //check if user Exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ success: false, message: "User already exists" });
    return;
  }

  //create user with in DB
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      sucess: true,
      message: "Success in registering user",
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({ sucess: false, message: "User data is invalid" });
  }
};

module.exports = { registerUser };
