const userModel = require("../models/user.model");

// register_api
const register_api = (req, res) => {
  const { username, email, password, role } = req.body;

  const userExists = userModel.find(data => data.email === email);

  if(userExists){
    return res.status(400).json({message: "User account exists"});
  };

  let userPin = Math.floor(1000 + Math.random() * 9999);

  const newUser = {
    id: Date.now(),
    username,
    email,
    password,
    role,
    userPin
  };

  userModel.push(newUser);
  res.status(201).json({message: "User account created, check the console for user login pin"});
  console.log(userPin);
};

// login_api
const login_api = (req, res) => {
    const {email, password, userPin} = req.body;

    const user = userModel.find(data => data.email === email && data.password === password);

    if(!user){
        return res.status(401).json({message: "Invalid Email or Password"});
    }

    if(userPin !== user.userPin){
        return res.status(401).json({message: "Invalid user Pin"});
    }

    res.status(200).json({message: `Login Successful, Welcome back ${user.username}`});
};

module.exports = {register_api, login_api};