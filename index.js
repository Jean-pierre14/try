import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Student from "./routers/StudentRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./config.env" });

const app = express();

const PORT = process.env.PORT || 7000;

const DB = process.env.DB;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Code from /users api" });
});

app.use("/students", Student);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Connected to mongoose`))
  .catch((err) => console.log(`Connection failed ${err.message}`));

app.listen(PORT, (err) => {
  if (err) throw err.message;
  console.log(`Server run on port: ${PORT}`);
});
