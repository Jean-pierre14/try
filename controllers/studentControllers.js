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
    res.json(docs);
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

export const DeleteOneUser = (req, res) => {
  res.json("DeleteOneUser");
};

export const postUser = (req, res) => {
  const { username } = req.body;

  if (!username || username === "undifined" || username === "") {
    error.push("Username is empty");
  }
};
export const deleteUsers = (req, res) => {
  res.json("deleteUsers");
};
