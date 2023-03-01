import exp from "express";
const router = exp.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) =>
  res.render("register", { title: "Bisimwa OS" })
);

export default router;
