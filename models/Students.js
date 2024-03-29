import mongoose from "mongoose";
// Members Registration
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    require: true,
  },
  annee: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model("Student", UserSchema);

export default Student;
