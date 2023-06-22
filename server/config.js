require("dotenv").config();
require("colors");

const PORT = +process.env.PORT || 3005;

const DB_URI = (process.env.NODE_ENV === "test")
    ?"postgresql:///easygpt_test"
    :"postgresql:///easygpt";


const SECRET_KEY = process.env.SECRET_KEY || "$2b$12$WPRspdrNORPeyMPQALKSo.K5w6ZjYspvc85jglZSIhEBhxbB7e9hu";

const BCRYPT_WORK_FACTOR =12;

console.log("EasyGPT Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, DB_URI);
console.log("---");

module.exports = {
    PORT,
    DB_URI,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR
}