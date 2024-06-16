import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
    profile_id: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
