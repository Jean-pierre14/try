import exp from "express";
import {
  PostOne,
  PutOne,
  deleteOne,
  getAll,
  getOne,
} from "../controllers/stock.controller.js";

const router = exp.Router();

router.route("/").get(getAll).post(PostOne);

router.route("/:id").get(getOne).put(PutOne).delete(deleteOne);

export default router;
