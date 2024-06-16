import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
  console.log("DB connected!");
});
app.use(bodyParser.json());
app.use(routes);
app
  .listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log(err);
    process.exit(11);
  });
