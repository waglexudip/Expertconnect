const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rated:[{type:String}],
  aboutme:{type:String},
  field:{type:String},
  rating:{type:Number},
  totalraters:{type:Number},
});

const UserModel = model("User", UserSchema);
module.exports = UserModel;