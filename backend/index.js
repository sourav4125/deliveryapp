const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// const route = require("./routes/route");
const route = require("./routes/route");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Databse"))
  .catch((err) => console.log(err));
  app.use("/", route);

app.get("/", (req, res) => {
  res.send("Server is running");
});



//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
