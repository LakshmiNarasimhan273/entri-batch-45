const userModel = require("../models/user.model");

// register api, method: POST
const register_api = (req, res) => {
    const {username, email, password} = req.body;

    const userExists = userModel.find(data => data.email === email);

    if(userExists){
        return res.status(400).json({message: "User account already exists"});
    }

    let loginPin = Math.floor(1000 + Math.random() * 9999);

    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        loginPin
    };
    userModel.push(newUser);
    res.status(201).json({message: "User account created"});
    console.log(loginPin);
}

// login api method: POST
const login_api = (req, res) => {
    const{email, password, loginPin} = req.body;

    const user = userModel.find(data => data.email === email && data.password === password);

    if(!user){
        return res.status(401).json({message: "Invalid Email or Password"});
    }

    if(loginPin !== user.loginPin){
        return res.status(401).json({message: "Invalid login pin"});
    }

    res.status(200).json({message: `Login Successful, Welcome back ${user.username}`});

}

module.exports = {register_api, login_api};