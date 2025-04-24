const express = require("express");
const app = express();
const dbConnection = require("./config/config");
const routes = require("./routes/api");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(routes);

//mongodb connection
dbConnection();

app.listen(Number(process.env.PORT), () => {
  console.log(`server is listening at ${process.env.PORT}!`);
});
