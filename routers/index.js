const exp = require("express");

const router = exp.Router();
const title = "Mr. BISIMWA";

const Student = require("../models/Students");

router.get("/", async (req, res) => {
  await Student.find({}, (err, docs) => {
    if (err) throw err.message;
    res.status(200).json(docs);
  });
});

router.get("/register", (req, res) => {
  res.render("register", { title });
});
module.exports = router;
