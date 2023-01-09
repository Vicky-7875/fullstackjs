import express from "express";
import mongoose from "mongoose";
import { APP_PORT, DB_URL } from "./config";
import { errorHandler } from "./middlewares";
import routes from "./routes";
import path from "path";

const app = express();

//database setup
mongoose.connect(DB_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("DB connected.......");
});

global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended: false }));

app.use(express.json()); //from receining json data
app.use("/api", routes);

app.use("/uploads", express.static("uploads"));

app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log(`Listing on port ${APP_PORT}`);
});
