import exp from "express";
import {
  postOne,
  putOne,
  deleteOne,
  getAll,
  getOne,
} from "../controllers/stock.controller.js";

const router = exp.Router();

router.route("/").get(getAll).post(postOne);

router.route("/:id").get(getOne).put(putOne).delete(deleteOne);

export default router;
