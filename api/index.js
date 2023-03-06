const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require('morgan');

const authRoute = require("./routes/auth.js");
const userRoute = require('./routes/user.routes')

//Making DB Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Mongo Connection Established!");
  })
  .catch((err) => {
    console.log(`Error Occured For MongoDB Connection :\n`);
    console.log(err);
  });

app.use(express.json());
app.use(morgan());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
//Listening the app on PORT 8800
app.listen(8800, () => {
  console.log(`Backend Server is Running On : 8800`);
});
