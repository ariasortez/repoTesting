import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const usersSchema = new Schema({
  id: ObjectId,
  name: String,
  age: Number,
});

export default mongoose.model("Users", usersSchema);
