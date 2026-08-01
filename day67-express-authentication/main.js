const express = require("express");
const app = express();

const authRoutes = require("./routes/user.route");


app.use(express.json());
app.use("/auth", authRoutes);

let port = 8083;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});