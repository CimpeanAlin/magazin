const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/users")

mongoose
  .connect(
    "mongodb+srv://alincimpean6:tU33fRfpRwHiGBfz@cluster0.kmomjra.mongodb.net/magazin?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/magazinapi/users", userRoute);

app.listen(5000, () => {
    console.log("Backend server is running!");
});
