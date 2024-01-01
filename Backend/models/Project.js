const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProSchema = new Schema({
  username: { type: String, required: true },
  title: { type: String, required: true },
  des: { type: String, required: true },
  repo: { type: String, required: true },
});

const ProModel = model("Project", ProSchema);
module.exports = ProModel;
