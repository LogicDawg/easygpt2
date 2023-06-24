require("dotenv").config();
require("colors");

const PORT = +process.env.PORT || 3005;
//const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "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";
const DB_URI = (process.env.NODE_ENV === "test")
    ?"postgres://easygpt_user:7Qu6giqJ9T2XvXKaWPIq45zbbCLoEbde@dpg-cib5tft9aq03rjm87cag-a/easygpt"
    :"postgres://easygpt_user:7Qu6giqJ9T2XvXKaWPIq45zbbCLoEbde@dpg-cib5tft9aq03rjm87cag-a/easygpt";


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
    OPENAI_API_KEY,
    DB_URI,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR
}