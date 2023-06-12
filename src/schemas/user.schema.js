import { Schema } from "mongoose";

export default new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: false,
    },
    surname: {
      type: String,
      required: true,
      unique: false,
    },
    age: {
      type: Number,
      required: true,
      unique: false,
    },
    access: {
      type: Object,
      required: true,
      email: {
        type: String,
        ruquired: true,
        unique: true,
      },
      password: {
        type: String,
        ruquired: true,
        unique: false,
      },
    },
  },
  { timestamps: true }
);
