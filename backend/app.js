const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const { DB_URL, DB_PORT, DB_NAME, PORT } = process.env;

mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`);

const app = express();
app.use(express.json());
const corsConfig = {
  origin: "https://localhost:3001",
  Credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use("/user", require("./src/routes/user"));

app.use((req, res, next) => {
  const error = new Error("Nichts gefunden");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: error.message,
  });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
