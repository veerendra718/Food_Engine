const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(PORT, () => {
  console.log(`Server Started on Server ${PORT}: http://localhost:${PORT}`);
});
