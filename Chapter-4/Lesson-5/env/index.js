// create a .env file and add this code
//  PaymentAPI=myDevApi

// to install dotenv
// npm i dotenv

const dotEnv = require("dotenv");
dotEnv.config();

console.log(process.env.PaymentAPI); //retrieve the data from .env file

