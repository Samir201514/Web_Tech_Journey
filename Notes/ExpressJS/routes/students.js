const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Students List");
});

router.post("/", (req, res) => {
  res.send("Add New Student");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get Student with ID : ${req.params.id}`);
  })
  .patch((req, res) => {
    res.send(`Update Student with ID : ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Remove Student with ID : ${req.params.id}`);
  });

module.exports = router;
