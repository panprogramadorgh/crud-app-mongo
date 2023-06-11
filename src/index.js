import app from "./app.js";
import connectDB from "./db.js";

connectDB(">>> Database connected");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`>>> Server running at : ${PORT}`.yellow));
