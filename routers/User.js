import exp from "express";

import {
  getUser,
  getUsers,
  postUser,
  deleteUsers,
  DeleteOneUser,
  updateUser,
} from "../controllers/studentControllers.js";

const router = exp.Router();

router.route("/").get(getUsers).post(postUser).delete(deleteUsers);

router.route("/:id").get(getUser).put(updateUser).delete(DeleteOneUser);

export default router;
