const express = require("express");
const app = express();

const patientRoutes = require("./routes/patient.routes");

let port = 8083;

app.use(express.json());
app.use(patientRoutes);

app.listen(port, ()=> {
    console.log(`Server running on ${port}`);
});