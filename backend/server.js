const express =  require("express");
const dotenv = require("dotenv");
const mongoose =  require("mongoose");
const cors =  require("cors");
const mainModel = require("./src/model");

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.post("/storepharse", async (req, res) => {
  const response = await req.body;

  const newPharse = await new mainModel({
    pharseTitle: req.body.phareTitle,
    pharseValue: req.body.phareVal,
  }).save();
  
  console.log(response);
  // const res = await new mainModel(re)
  res.json({
    data: newPharse,
    message: " successfully stored",
    status: 200,
  });
});

mongoose
  .connect(`${process.env.Mongo_url}`)
  .then(() => {
    const port = process.env.port || 3000;
    app.listen(port, () => {
      console.log(`the server is up at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("failed to connect with db");
  });
