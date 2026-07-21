// import axios from "axios";
// import {useState}, React from "react";
// const axios = require("axios");

// import express from "express"; change the type(in package.json file) from commonjs to module
// if you want the import statement

const express = require("express");

// syntax
const app = express();
// 3000, 3001, 8080, 8081, 8082
// 8082 is our port number

// server creation part
app.listen(8082, () => {
    console.log("Server running on 8082");
});