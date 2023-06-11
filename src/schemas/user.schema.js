import { Schema } from "mongoose";

export default new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
