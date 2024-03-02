const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./swagger/swaggerconfig");
const dotenv = require("dotenv");
dotenv.config();
const dbconfig = require("./dbconfig/dbconfig");
const Router = require("./Routes/Route");
const app = express();

dbconfig.connection.connect(function (err) {
  if (err) throw err;
  console.log("Db is Connected!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/v1", Router);

let Port = process.env.PORT || 1000;
app.listen(Port, (req, res) => {
  console.log("App is running  " + Port);
});
