import express from "express";
import mongoose from "mongoose";
import { APP_PORT, DB_URL } from "./config";
import errorHandler from "./middlewares/errorHandler";
import routes from "./routes";

const app = express();

//database setup
mongoose.connect(DB_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("DB connected.......");
});

app.use(express.json());
app.use("/api", routes);

app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log(`Listing on port ${APP_PORT}`);
});
