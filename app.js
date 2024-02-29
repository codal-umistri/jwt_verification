const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbconfig = require("./dbconfig/dbconfig");

dbconfig.connection.connect(function (err) {
  if (err) throw err;
  console.log("Db is Connected!");
});
const Router = require("./Routes/Route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", Router);

let Port = process.env.PORT || 1000;
app.listen(Port, (req, res) => {
  console.log("App is running  " + Port);
});
