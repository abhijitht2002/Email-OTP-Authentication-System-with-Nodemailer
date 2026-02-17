const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
const authRoute = require("./routes/auth.route")

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log("mongodb connection error", error);
  }
};
connectDB();

app.use("/api/auth", authRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.port}`);
});
