import mongoose from "mongoose";

const MatiereSchema = new mongoose.Schema({
  matiere: {
    type: String,
    required: true,
  },
});

const Matiere = mongoose.model("Matiere", MatiereSchema);

export default Matiere;
