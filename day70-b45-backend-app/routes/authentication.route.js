const express = require("express");
const router = express.Router();

const authentication = require("../security/authentication.security");

// localhost:8083/auth/register
router.post("/register", authentication.registerApi);
router.post("/login", authentication.loginApi);

module.exports = router;