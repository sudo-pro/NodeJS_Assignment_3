const User = require("../models/user");

module.exports = class UserController {
  constructor() {
    this.user = new User();
  }

  showHome(_req, res) {
    res.render("home", {
      pageTitle: "Home - Add User",
      path: "/",
      styles: ["/css/container.css", "/css/form.css"],
    });
  }

  async addUser(req, res) {
    try {
      await this.user.addUser({
        name: req.body.name,
      });
      res.redirect("/users");
    } catch (err) {
      res.status(500).send("Error adding user");
    }
  }

  async deleteUser(req, res) {
    try {
      const deletedUser = await this.user.deleteUser(req.params?.id);
      res.status(200).json(deletedUser);
    } catch (err) {
      res.status(500).send("Error deleting user");
    }
  }

  async showUsers(_req, res) {
    try {
      const users = await this.user.getUsers();
      res.render("users", {
        users,
        pageTitle: "View Users",
        path: "/users",
        styles: ["/css/container.css"],
      });
    } catch (err) {
      res.status(500).send("Error fetching users");
    }
  }

  async editUser(req, res) {
    try {
      const user = await this.user.getUserById(req.params.id);
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.render("edit", {
        user,
        pageTitle: "Edit User",
        styles: ["/css/container.css", "/css/form.css"],
        path: `/edit/${req.params.id}`,
      });
    } catch (err) {
      res.status(500).send("Error fetching user");
    }
  }

  async updateUser(req, res) {
    try {
      await this.user.editUser({ id: req.params.id, name: req.body.name });
      res.redirect("/users");
    } catch (err) {
      res.status(500).send("Error updating user");
    }
  }
};
