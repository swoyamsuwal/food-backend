require("dotenv").config();
const express = require("express");
const app = express();
// importing db connection
const connectDB = require("./config/database");

const PORT = process.env.PORT || 1000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running in port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1); // exit the process with failure
  }
};
// don't forget to call the main function
startServer();