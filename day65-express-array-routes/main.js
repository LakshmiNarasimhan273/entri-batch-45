const express = require("express");
const app = express();
const studentRoutes = require("./routes/student.route");

app.use(express.json());
app.use(studentRoutes);

let port = 8083;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});