const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid");

const userSchema = new Schema({
  userUid: { type: String, default: uuid.v4 },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordDigest: { type: String, required: true },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  assetsWatched: { type: Array, default: [] },
  screens: { type: Array, default: [] },
  nameAddressMappings: { type: Array, default: [] },
  dfnsId: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
