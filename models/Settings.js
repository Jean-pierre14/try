import mongoose from "mongoose";

const SettingSchema = mongoose.Schema({
  phones: {
    type: Array,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  ownName: {
    type: String,
    required: false,
  },
});

const Setting = mongoose.model("Settings", SettingSchema);

export default Setting;
