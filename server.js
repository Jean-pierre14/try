const exp = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  dotenv = require("dotenv"),
  bodyParser = require("body-parser"),
  { success, error } = require("consola"),
  app = exp();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 5000;
const DB = process.env.DB || "localhost:27167/mongodb/";

// const db = require('./models/key').MongoURI
// Database connection
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the DB mongo");
    success({ message: `Connected to the database mongodb`, badge: true });
  })
  .catch((err) => {
    console.log(err);
  });

// Cors
app.use(cors());

/**
 * Body parsing data to the serve
 */

app.use(exp.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// Assets
app.use("/assets/", exp.static("public"));
let title = "Mr. BISIMWA";
const errors = [];
const Student = require("./models/Students");

app.get("/", (req, res) => {
  let title = "Mr. Bisimwa";
  Student.find({}, async (err, users) => {
    if (err) throw err;
    await res.render("index", { title, users });
  });
});

app.use("/student", require("./routers/"));

app.get("/fetch", async (req, res) => {
  await Student.find({}, (err, cb) => {
    if (err) throw err;
    res.json(cb);
  });
});

app.use("/users", require("./controllers/users"));

// Style
app.get("/style", (req, res) => {
  res.render("style");
});

app.get("/get/:id", (req, res) => {
  let id = req.params.id;
  title = "Get";
  Student.findById(id, async (err, user) => {
    if (err) throw err;
    await res.render("edit", { title, user });
  });
});

app.get("/edit", (req, res) => {
  let id = req.params._id;
  title = "Edit " + id;
  res.render("edit", { title });
  // Student.findById(id, async (err, cb) => {
  //     if (err) throw err
  //     await res.render('edit', { title, cb })
  // })
});

// Add user
app.post("/add", (req, res) => {
  const { username, fullname, email, Classe, password } = req.body;
  if (username === undefined || username === "") {
    errors.push({ message: "Username is required" });
  }
  if (errors.length === 0) {
    const NewStudent = new Student({
      username,
      fullname,
      email,
      Classe,
      password,
    });
    NewStudent.save()
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  } else {
    res.json("Wrong");
  }
});

app.listen(PORT, (err) => {
  if (err) error({ message: `Error ${err}`, badge: true });
  success({ message: `Server run on port ${PORT}`, badge: true });
});
