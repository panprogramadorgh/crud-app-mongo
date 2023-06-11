import "colors";
import { connect } from "mongoose";

const connectDatabase = async (message) => {
  try {
    await connect("mongodb://127.0.0.1/crud-application");
    console.log(message.yellow);
  } catch (e) {
    console.error(e);
  }
};

export default connectDatabase;
