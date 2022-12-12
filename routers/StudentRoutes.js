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

router.route("/").get(getUsers).delete(deleteUsers);
router.post("/createStudent", postUser);
router.route("/:id").get(getUser).put(updateUser).delete(DeleteOneUser);

export default router;
