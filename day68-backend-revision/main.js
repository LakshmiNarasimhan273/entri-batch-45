const express = require("express");
const app = express();

const authRoutes = require("./routes/user.routes");
const courseRoutes = require("./routes/courses.routes");

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);

let port = 8083;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

// system design - tightly coupled