const express = require("express");
const app = express();

let port = 8083;

// routes
// http methods - get, put, post, delete
// scenario: task

// get method
app.get("/tasks", (req, res) => {
  //js -> api function
  // api logics...
  res.json({
    message: "Your task working on backend for next few weeks",
  });
});

app.get("/users", (req, res) => {
  res.json({ message: "Welcome Narasimhan, you're logged in" });
});

app.post("/tasks/create", (req, res) => {
    res.json({message: "Task created successfully"});
});

app.put("/tasks/edit", (req, res) => {
    res.json({message: "Task updated"});
});

app.delete("/tasks/delete", (req, res) => {
    res.json({message: "Task Deleted"});
})

// method+endpoint -> api function (basic)
// method+endpoint -> routes (folder)
// api function -> controllers (folder)

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

// http://localhost:8083/tasks


app.put("/tasks/edit", (req, res) => {
    res.json({message: "Task updated"});
});

// controllers
// const editProduct = (req, res) => {
// }

// routes
// app.put("/product/edit", editProduct);