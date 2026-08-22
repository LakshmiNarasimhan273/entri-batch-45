const userModel = require("../models/users.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// registerApi
const registerApi = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
      return res
        .status(400)
        .json({ success: false, message: "All the fields are mandatory" });
    }

    const emailCheck = await userModel.findOne({ email });
    // emailCheck returns boolean value -> already exists TRUE | FALSE
    if (emailCheck) {
      return res
        .status(400)
        .json({ success: false, message: "User email already exists" });
    }

    // {
    //     _id: 65135131297364132,
    //     username: "narasimhan",
    //     email: "narasimhan@mail.com",
    //     password: "Narasimhan@123", -> hash (andlkdfjalfh3luhl3rbfl3bf)
    //     role: "admin"
    // }
    const hashedPassword = await bcrypt.hash(password, 10);
    // test@123 -> tutyty
    // test@123 -> tuadfs
    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({ success: true, message: "Registration Successful" });
    // new user creation
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "User registration failed" });
  }
};

// loginApi
const loginApi = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Email or password" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Email or password" });
    }

    // crucial step
    // token generation
    const token = jwt.sign(
      // 3 parameters -> payload, secret key, expiry time
      {
        userId: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      process.env.secret_key,
      { expiresIn: "24h" },
    );

    res.status(200).json({ success: true, message: "login Successful", token });
  } catch (err) {
    res.status(500).json({ success: false, message: "User login failed" });
  }
};

module.exports = { registerApi, loginApi };
