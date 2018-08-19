const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TinyUrl = new Schema({
  originalUrl: String,
  urlCode: String,
  shortUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
mongoose.model("tinyurl", TinyUrl);