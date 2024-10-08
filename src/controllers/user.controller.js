const { User } = require("../models");

module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();

    if (users === "" || users === null) {
      return res.status(404).json({ message: "Users not found" });
    }

    return res.status(200).json({ users });
  },
  store: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
