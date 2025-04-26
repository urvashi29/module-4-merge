const express = require("express");
const dbConnection = require("./config/config");
const routes = require("./routes/todoroutes");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

dbConnection();

app.use(cors()); //cross origin resource sharing
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
