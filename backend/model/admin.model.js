const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    username: String,
    name: String,
    email: String,
    password: String,
    number: Number,
  },
  {
    versionKey: false,
  }
);

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };
