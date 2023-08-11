import Stock from "../models/stock.model.js";

export const getAll = async (req, res) => {
  const results = await Stock.find();
  res.json(results);
};
export const getOne = (req, res) => {
  res.json("Get One");
};
export const PostOne = (req, res) => {
  res.json("Post");
};
export const PutOne = (req, res) => {
  res.json("Put");
};
export const deleteOne = (req, res) => {
  res.json("Delete");
};
