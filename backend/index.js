const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const user = require("./routes/UserRouter");
dotenv.config();

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

app.use("/", user);

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => { 
  console.log(`app listening on ${process.env.PORT}`);
});
