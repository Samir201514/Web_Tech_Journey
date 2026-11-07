// Express is a fast, unopinionated, and minimal web framework for Node.js. Express provides a set of features suitable for building web applications and REST APIs.

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Middleware is a function that executes during the request-response cycle.
// Parses incoming JSON request bodies. Makes the parsed data accessible through req.body.
app.use(express.json());
app.use(express.static("public"))

// Routes
app.post("/login/:id", (req, res) => {
  res.status(200).send({
    message: "Login Successful",
    userId: req.params.id,
    name: req.body.name,
  });
});

app.use("/students", require("./routes/students.js"));

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
