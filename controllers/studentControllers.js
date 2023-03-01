import Student from "../models/Students.js";

export const getUsers = async (req, res) => {
  await Student.find({}, (err, cb) => {
    if (err) throw err;
    res.json(cb);
  });
};

export const searchUser = async (req, res) => {
  let name = req.params.name;
  await Student.find({ fullname: name }, (err, docs) => {
    if (err) throw err;
    res.json(docs);
  });
};

export const getUser = async (req, res) => {
  let Id = req.params.id;
  await Student.findById({ _id: Id }, (err, docs) => {
    if (err) throw err;
    // res.json(docs);
    res.render("studentOne", { docs });
  });
};

export const updateUser = async (req, res) => {
  let Id = req.params.id;

  const { username, fullname, classe } = req.body;

  await Student.findOneAndUpdate(
    { _id: Id },
    { $set: { username: username, fullname: fullname, class: classe } },
    { new: true },
    (err, data) => {
      if (err) throw err.message;
      res.json(data);
    }
  );
};

export const DeleteOneUser = async (req, res) => {
  const Id = req.params.id;

  await Student.findByIdAndDelete({ _id: Id }, (err) => {
    if (err) throw err.message;
    res.json({ data: "Deleted" });
  });
};

export const postUser = async (req, res) => {
  const { username, fullname, classe, email, annee } = req.body;
  let errors = [];

  if (!username || !fullname || !classe || !annee || !email) {
    errors.push({ msg: "Fields are empty" });
  }

  if (errors.length > 0) {
    res.json(errors);
  } else {
    const NewStudent = new Student({
      username,
      fullname,
      classe,
      annee,
      email,
    });
    NewStudent.save()
      .then(() => {
        res.status(200).json("success");
      })
      .catch((err) => console.log(err.message));
  }
};

export const deleteUsers = (req, res) => {
  res.json("deleteUsers");
};
