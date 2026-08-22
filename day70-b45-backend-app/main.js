const express = require("express");
const app = express();
require("dotenv").config();

const dbConnection = require("./config/dbconnection.config");
const productRoutes = require("./routes/products.route");
const authRoutes = require("./routes/authentication.route");

app.use(express.json());
app.use("/products", productRoutes);
app.use("/auth", authRoutes);

dbConnection();
app.listen(process.env.port, () => {
    console.log(`Server running on ${process.env.port}`);
});

// database connection - mongoose
// security layer - dotenv