const express = require("express");
const router = express.Router();

const authentication = require("../security/authentication.security");

// http://localhost:8083/auth/register
router.post("/register", authentication.register_api);
router.post("/login", authentication.login_api);

module.exports = router;