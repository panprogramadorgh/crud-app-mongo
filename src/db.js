import { connect } from "mongoose";

const connectDatabase = async () => {
  try {
    await connect("mongodb://127.0.0.1/mongo-crud-app");
    console.log(">>> Connected to database");
  } catch (e) {
    console.error(e);
  }
};

export default connectDatabase;
