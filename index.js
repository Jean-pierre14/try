import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Student from "./routers/StudentRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import clients from "./routers/clients.js";
import stockRouter from "./routers/stock.routers.js";

dotenv.config({ path: ".env" });

const app = express();

const PORT = process.env.PORT || 7000;

const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Connected to mongoose`))
  .catch((err) => console.log(`Connection failed ${err.message}`));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", clients);

app.use("/students", Student);

app.use("/stock", stockRouter);

app.set("view engine", "ejs");

const Server = () => {
  app.listen(PORT, (err) => {
    if (err) throw err.message;
    console.log(`Server run on port: ${PORT}`);
  });
};

Server();
