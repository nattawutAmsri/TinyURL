const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Notes = new Schema({
  title: String,
  note: String,
  hash: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
mongoose.model("notes", Notes);