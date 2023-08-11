import Stock from "../models/stock.model.js";

export const getAll = async (req, res) => {
  try {
    const results = await Stock.find();
    res.json(results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving stocks", error: error.message });
  }
};

export const getOne = async (req, res) => {
  const stockId = req.params.id;

  try {
    const stock = await Stock.findById(stockId);
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }
    res.json(stock);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving stock", error: error.message });
  }
};

export const postOne = async (req, res) => {
  const { name } = req.body;

  try {
    // Check if a stock with the same name already exists
    let existingStock = await Stock.findOne({ name });

    if (existingStock) {
      return res
        .status(409)
        .json({ message: "Stock with the same name already exists" });
    }

    // No existing stock with the same name, proceed with validation and creation/update
    const newStock = new Stock(req.body);
    const validationError = newStock.validateSync();

    if (validationError) {
      return res
        .status(400)
        .json({ message: "Validation error", error: validationError.errors });
    }

    await newStock.save();
    res.status(201).json(newStock);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating/updating stock", error: error.message });
  }
};

export const putOne = async (req, res) => {
  const stockId = req.params.id;

  try {
    const stock = await Stock.findById(stockId);
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    Object.assign(stock, req.body);
    await stock.save();
    res.json(stock);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating stock", error: error.message });
  }
};

export const deleteOne = async (req, res) => {
  const stockId = req.params.id;

  try {
    const stock = await Stock.findById(stockId);
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    await stock.remove();
    res.json({ message: "Stock deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting stock", error: error.message });
  }
};
