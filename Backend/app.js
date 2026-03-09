const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(PORT, () => {
  console.log(`Server Started on Server ${PORT}: http://localhost:${PORT}`);
});
