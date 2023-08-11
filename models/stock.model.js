import mongoose from "mongoose";

// Define the schema
const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  selling_price: {
    type: Number,
    required: true,
  },
  bought_price: {
    type: Number,
    required: true,
  },
});

// Define a virtual property for 'benefice'
stockSchema.virtual("benefice").get(function () {
  return this.selling_price - this.bought_price;
});

// Create the model
const Stock = mongoose.model("Stock", stockSchema);

export default Stock;
