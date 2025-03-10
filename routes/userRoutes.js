const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const { validateUser } = require("../middlewares/userMiddleware");

const UC = new UserController();

router.get("/", UC.showHome);
router.post("/add-user", validateUser, UC.addUser.bind(UC));
router.get("/users", UC.showUsers.bind(UC));
router.get("/edit/:id", UC.editUser.bind(UC));
router.post("/update/:id", validateUser, UC.updateUser.bind(UC));
router.delete("/delete/:id", UC.deleteUser.bind(UC));

module.exports = router;
